import React, { ReactNode } from 'react'

const Generics = <ListItems,>({items, render}: {
     items: ListItems[];
     render : (item: ListItems) => ReactNode
}) => { 


  return (
    <ul>
     {items.map((item, index) => (
          <li key={index}>
               {render(item)}
          </li>
     ))}
    </ul>
  )
}

export default Generics