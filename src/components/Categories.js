import React, { useState } from 'react'

export default function Categories({chooseCategory}) {
    const [categories, setCategories] = useState([
        {
        key: 'all',
        name: 'Всё',
        },
        {
            key: 'chairs',
            name: 'Стулья',
        },
        {
            key: 'tables',
            name: 'Стулья',
        },
        {
            key: 'sofa',
            name: 'Диваны',
        },
        {
            key: 'lights',
            name: 'Свет',
        }
    ]
    )
    return (
        <div className='categories'>
            {categories.map((x) => (
                (
                    <div key={x.key} onClick={() => chooseCategory(x.key)}>{x.name}</div>
                )
            ))}
        </div>
    )
}
