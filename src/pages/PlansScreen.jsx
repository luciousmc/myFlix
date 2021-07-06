import React, { useState, useEffect } from 'react';
import './PlansScreen.css';
import { db } from './../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import { loadStripe } from '@stripe/stripe-js';


function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {

      db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get().then((querySnapshot) => {
          querySnapshot.forEach((subscription) => {
            const { role, current_period_end, current_period_start } = subscription.data();
            
            setSubscription({
              role,
              current_period_end: current_period_end.seconds,
              current_period_start: current_period_start.seconds
            })
          })
        })
  }, [user.uid]);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get().then(querySnapshot => {
        const products = {};

        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();

          const priceSnap = await productDoc.ref.collection('prices').get();
          priceSnap.docs.forEach((priceDoc) => {
            products[productDoc.id].prices = {
              priceId: priceDoc.id,
              priceData: priceDoc.data()
            }
          })
        })
        setProducts(products)
      })
  }, [])

  const loadCheckout = async (priceId) => {
    const docRef = await db.collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert('An error occurred: ', error.mesage);
      }

      if (sessionId) {
        const stripe = await loadStripe('pk_test_51J9EggKGDeEymhK9BrGQ6ZGCEwUz0w5bCN7YdFwcfTVDF9sJ1GQEqsInjJmJ5nGqm3vKMoEilqAr7sr6EQmt8gof001hnCvMKb')

        stripe.redirectToCheckout({ sessionId })
      }
    })
  }

  return (
    <div className='plansScreen'>
      {subscription && (
        <p>
          Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        // TODO: Check if user subscription is active

        const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);

        return (
          <div key={productId} className={`${isCurrentPackage && 'planScreen__plan--disabled'} planScreen__plan`}>
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
              {isCurrentPackage ? 'Current Package' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default PlansScreen
