import { useState,useEffect } from 'react';
import {useSelector} from 'react-redux';
import './ShoppingCart.css';



const SuperCoin = () => {

    const [superCoins, setSuperCoins] = useState(0);

const cartItems = useSelector(state => state.cart.cartItems);
const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
useEffect(() => {
  if (totalAmount > 100) {
    setSuperCoins(totalAmount/10);
  }
   else {
    setSuperCoins(0);
  }
}, [totalAmount]);

return(
    <>
     <div className="supercoin">
        <h2 className="supercoin-title">SuperCoins</h2>
     <h5 className="supercoins">For the Amount of {totalAmount} You Earned Supercoins of {superCoins}</h5>
     </div>
    </>

);

};

export default SuperCoin;