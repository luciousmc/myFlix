import React, { useState, useEffect } from 'react';
import './PlansScreen.css';
import { db } from './../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import { loadStripe } from '@stripe/stripe-js';


function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

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
      {Object.entries(products).map(([productId, productData]) => {
        // TODO: Check if user subscription is active
        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default PlansScreen
