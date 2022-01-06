import CartListInfo from '@/Components/Cart/CartListInfo/CartListInfo.jsx';
import CartProgressBar from '@/Components/Cart/CartProgressBar/CartProgressBar.jsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classes from './Cart.module.scss';
import CartComplete from './Complete/Complete.jsx';
import CartConfirm from './Confirm/Confirm.jsx';
import CartPayment from './Payment/Payment.jsx';

const Checkout = () => {
  const params = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {params.status !== 'complete' && (
        <div className={classes.progressBarLayout}>
          <CartProgressBar />
        </div>
      )}
      {!params.status && (
        <div className={classes.cartInfo}>
          <CartListInfo cartItems={cartItems} />
        </div>
      )}

      {params.status === 'payment' && (
        <div>
          <CartPayment />
        </div>
      )}
      {params.status === 'confirm' && (
        <div>
          <CartConfirm />
        </div>
      )}
      {params.status === 'complete' && (
        <div>
          <CartComplete />
        </div>
      )}
    </div>
  );
};

export default Checkout;
