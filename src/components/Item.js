import React from 'react'

export default function Item({ item, onAdd}) {
    return (
        <div className='item'>
            <img src={'./img/' + item.img}/>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <div className='add-to-card' onClick={() => onAdd(item)}> + </div>
        </div>
    )
}
