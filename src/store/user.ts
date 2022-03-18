import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Web3 from 'web3'

import { PatientContract } from '@contracts/index'

interface UserInterface {
  email: string;
  firstname: string;
  lastname: string;
}

export const setUserInfo = async (dispatch: any, getState: any) => {
  const state = getState()
  const web3 = state.wallet.web3Instance
  const address = state.wallet.address
  const networkID = state.wallet.networkID
  const RegisterContract = new web3.eth.Contract(PatientContract.abi, PatientContract.networks[networkID].address)
  await RegisterContract.methods.addPatient(address, state.user.email, state.user.firstname, state.user.lastname).send({from:address, gas: 3000000})
  dispatch(setRegistered(true))
}

export const getUserInfo = async (dispatch: any, getState: any) => {
  const state = getState()
  console.log("asdasdfa",state)
  const web3 = state.wallet.web3Instance
  const address = state.wallet.address
  const networkID = state.wallet.networkID
  console.log("asdasdfa",address,networkID)
  
  const RegisterContract = new web3.eth.Contract(PatientContract.abi, PatientContract.networks[networkID].address)
  console.log("asdasdfa",RegisterContract.methods)
  console.log("getName",RegisterContract.methods.getName)
  // console.log("getName()",RegisterContract.methods.getName().call())
  // await RegisterContract.methods.addPatient(address, "titorps360@gmail.com", "thanuy","wuysamut").send({from:address, gas: 3000000})
  // await RegisterContract.methods.setName("titorps360@gmail.com").send({from:address})
  // const data = await RegisterContract.methods.getName().call()
  const data: UserInterface = await RegisterContract.methods.getPatient(address).call()
  console.log("data",data.email)
  dispatch(setBasicInfo(data))
  if (data.email != "") dispatch(setRegistered(true))
  // await RegisterContract.methods.addPatient(address, "titorps360@gmail.com", "thanuy","wuysamut").send({from:address, gas: 300000})
}

export const PatientSlice = createSlice({
  name: "patient",
  initialState: {
    email: "",
    firstname: "",
    lastname: "",
    isRegistered: false,
  },
  reducers: {
    setBasicInfo: (state, action) => {
      if (action.payload.email!== "") {
        state.email = action.payload.email;
        state.firstname = action.payload.firstname;
        state.lastname = action.payload.lastname;
      }
    },
    setRegistered: (state, action) => {
      state.isRegistered = action.payload;
    }
  }
})

export const { setBasicInfo, setRegistered } = PatientSlice.actions

export default PatientSlice.reducer