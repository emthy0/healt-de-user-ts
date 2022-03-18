import React, { FC, useEffect } from "react"
import { createContext, useContext, Context } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Button, Text, View } from 'react-native';

import Web3 from 'web3'

import { RootState } from '@/store'
import { connectWallet } from '@store/wallet'


import { Web3Context } from "@providers/Web3"
import { PatientContract } from '@contracts/index'


export const Register: FC = () => {
  const {web3Instance: web3} = useContext(Web3Context)
  const dispatch = useDispatch()
  const address = useSelector((state: RootState) => state.wallet.address)

  const CreateIdentityHandler = async () => {
    dispatch(connectWallet)
    console.log("dfdf",address)
    // const RegisterContract = new web3.eth.Contract(PatientContract.abi, PatientContract.networks[networkID].address)
    // await RegisterContract.methods.addPatient(account, "titorps360@gmail.com", "thanuy","wuysamut").send({from:account})

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Create Sukhaphab D identity"
        onPress={CreateIdentityHandler}
      />
    </View>
  );
}
