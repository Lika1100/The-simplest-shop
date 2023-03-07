import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Orders from './Orders';





export default function Header({ orders , onDelete}) {
  const [cartOpen, setCartOpen] = useState(false)
  const showOrders = (orders) => {
    let summa = 0;
    orders.forEach(element => summa += +element.price);
    return (
      <div>
        {orders.map((x) => (
          <Orders key={x.id} item={x} onDelete={onDelete}/>
        ))}
        <p className='summa'>Сумма: {+summa.toFixed(2)}$</p>
      </div>
    )
  }

  const showNothing = () => {
    return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
    )
  }


  return (
    <header>
      <div>
        <span className='logo'>
          House Stuff
        </span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen => !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>

        )}

      </div>
      <div className='presentation'></div>
    </header>
  )
}
