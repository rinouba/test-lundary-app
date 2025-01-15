import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pickUplocation } from '../Features/Counter/CounterSlice'
import FormaddressInfo from './FormaddressInfo'
import { SelectPickUp } from '../styled/StyledComponents';




function PickUpLocation() {
  const dispatch = useDispatch()
  const LocationCountry = useSelector((state) => state.counter.LocationCountry)
  // dispating name country and put in state and console log
  const pickUpLocation = (e) => { 
    dispatch(pickUplocation(e))
   }
   console.log(LocationCountry)

  return (
    <>
      {LocationCountry===""?
          <SelectPickUp onClick={(e) => { pickUpLocation(e.target.value) }}>
              <option value="">Select Location</option>
              <option value="Algeria">Algeria</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Morocco">Morocco</option>
          </SelectPickUp>
        : (<FormaddressInfo/>)
      }
    </>
  )
}

export default PickUpLocation