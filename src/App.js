import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { loremIpsum } from "lorem-ipsum";
import Items from './components/Items';
import Categories from './components/Categories';
//import Body from './landing/Body';
//import Header from './landing/Header';
//import Footer from './landing/Footer';

const list = [
  {
    id: 1,
    title: 'Стул серый',
    img: 'chair.jpg',
    desc: loremIpsum(2),
    category: 'chairs',
    price: '49.99',
  },
  {
    id: 2,
    title: 'Стул серый',
    img: 'chair.jpg',
    desc: loremIpsum(2),
    category: 'tables',
    price: '49.99',
  },
  {
    id: 3,
    title: 'Стул серый',
    img: 'chair.jpg',
    desc: loremIpsum(2),
    category: 'chairs',
    price: '49.99',
  },
  {
    id: 4,
    title: 'Стул серый',
    img: 'chair.jpg',
    desc: loremIpsum(2),
    category: 'chairs',
    price: '49.99',
  },
  {
    id: 5,
    title: 'Стул серый',
    img: 'chair.jpg',
    desc: loremIpsum(2),
    category: 'chairs',
    price: '49.99',
  },
  {
    id: 6,
    title: 'Стул серый',
    img: 'chair.jpg',
    desc: loremIpsum(2),
    category: 'chairs',
    price: '49.99',
  }
]




function App() {
  let [itemOrder, setItem] = useState([])

  function deleteOrder(id) {
    setItem((prev) => {
      let userOrder = [...prev]
      return userOrder.filter((x) => x.id !== id)
    })
    console.log(id, '!!!!!!!!!!!')
  }


  function addToOrder(el) {
    let isInArray = false;
    itemOrder.forEach((x) => {
      if (x.id === el.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      setItem((prev) => {
        console.log('pppppppppppp', prev)
        let userOrder = prev
        userOrder = [...itemOrder, el]

        console.log(userOrder, 'kkkkkkk')
        return userOrder;
      })
    }
  }

  function chooseCategory(category) {
    console.log(category)
  }

  return (
    <div className='wrapper'>
      <Header orders={itemOrder} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items items={list} onAdd={addToOrder} />
      <Footer />

    </div>)

}


export default App;

{/* */ }

