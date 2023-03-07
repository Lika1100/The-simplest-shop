import React from 'react'
import Item from './Item'

export default function items({items, onAdd}) {
  return (
    <main>
        {items.map((el => {
            return (
                <Item item={el} key={el.id} onAdd={onAdd}/>
            )
        }))}
    </main>
  )
}
