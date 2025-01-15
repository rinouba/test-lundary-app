import React from 'react'
import { Button, Article,Div } from '../styled/StyledComponents'
function Checkout() {
  return (
    <Article>
      <h1>Washing price : 10$</h1>
      <h1>distance price : 3$</h1>
      <Div>
        <Button onClick={() => { console.log("Total Price : 13$") }}>CheckOut</Button>
        <h2>Total Price : 13$</h2>
      </Div>
    </Article>
  )
}

export default Checkout