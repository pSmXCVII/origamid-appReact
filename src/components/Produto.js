import React from 'react'

const Produto = ( { name, props }) => {
  return (
    <div style={{border: "1px solid black", margin: "1rem", padding: "1rem"}}>
      <p>{name}</p>
      <ul>
        {props.map(prop => <li key={prop}>{prop}</li>)}
      </ul>
    </div>
  )
}

export default Produto
