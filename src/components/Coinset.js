import React from 'react'

function coinset({name, price, icon, symbol}) {
  return (
    <div className='coin'>
      <h1>{name}</h1>
      <img src={icon} alt="img"/>
      <h3>{price}</h3>
      <h3>{symbol}</h3>
    </div>
  )
}

export default coinset
