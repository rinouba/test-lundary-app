import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gettingAddressInfo } from '../Features/Counter/CounterSlice'
import Checkout from './Checkout'
import { Form , Label , Input, SubmitInput} from '../styled/StyledComponents'

function FormaddressInfo() {
  const addressInfo = useSelector((state) => state.counter.addressInfo)
  const dispatch = useDispatch()
  const sumbitForm = (event) => { 
    event.preventDefault();
    // console.log(event.target.fname.value)
    // console.log(event.target.address.value)
    // console.log(event.target.number.value)
    dispatch(gettingAddressInfo({
      fname: event.target.fname.value,
      address: event.target.address.value,
      number: event.target.number.value,
    }))
   }
  console.log(addressInfo)
  return (
        <div>
            {addressInfo.fullName===""?
                    <Form action="#" onSubmit={(event) => { sumbitForm(event) }}>
                        <Label htmlFor="fname">Full Name :</Label><br/>
                        <Input type="text" id="fname" name="fname" defaultValue="John Doe"/><br/>
                        <Label htmlFor="address">Address :</Label><br/>
                        <Input type="text" id="address" name="address" defaultValue="Algeria , batna , 1200" autoComplete="on"/><br/>
                        <Label htmlFor="number">Number :</Label><br/>
                        <Input type="number" id="number" name="number" defaultValue="063695874"/><br/><br/>
                        <SubmitInput type="submit" defaultValue="Submit"/>
                    </Form>:
                    <Checkout/>
            }
        </div>
  )
}

export default FormaddressInfo