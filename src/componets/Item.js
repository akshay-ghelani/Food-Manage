
import React from 'react';
import { useCart} from '../context/Cart'

export default function Item(props) {
 const cart=useCart();
  return (
    <div>
      <h4>item name:{props.name}</h4>
      <p>price : {props.price}</p>
      <button onClick={()=> cart.setItems([...cart.items,{name: props.name, price: props.price}])}>add to cart</button>
    </div>
  )
}
