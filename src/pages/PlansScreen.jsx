import React, { useState, useEffect } from 'react';
import './PlansScreen.css';
import { db } from './../../firebase';

function PlansScreen() {
  const [product, setProduct] = useState([]);

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
        setProduct(products)
      })
  }, [])


  return (
    <div className='plansScreen'>
      
    </div>
  )
}

export default PlansScreen
