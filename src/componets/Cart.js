import React,{useContext} from 'react';
import {Cartcontext} from '../context/Cart'

function Cart() {
  const cart=useContext(Cartcontext);
  console.log(cart)
  const total =cart.items.reduce((a, b) => a + b.price, 0)
  return (

      <div>
    <p>cart</p>
            {cart && cart.items.map((item, index) => {
            return  <li key={index}>
            {item.name} - ${item.price} 
          </li> }) }
        <h3>total bill:{total}</h3>

    </div>
  )
}

export default Cart;