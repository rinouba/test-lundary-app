import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  LocationCountry: "",
  addressInfo: {
    fullName: "",
    address: "",
    number:0
  },
  fullPrice:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    pickUplocation: (state,action)=>{
      state.LocationCountry = action.payload
    },
    gettingAddressInfo: (state,action)=>{
      state.addressInfo.fullName = action.payload.fname
      state.addressInfo.address = action.payload.address
      state.addressInfo.number = action.payload.number
    }
  },
})

// Action creators are generated for each case reducer function
export const {pickUplocation , gettingAddressInfo} = counterSlice.actions

export default counterSlice.reducer