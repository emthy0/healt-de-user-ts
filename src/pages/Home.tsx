import { Button, Text, View } from 'react-native'
import React, { FC, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '@/store'
import { getUserInfo } from '@store/user'

import { RegisterForm } from '@components/CreateUser'

export const Profile: FC = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state)
  useEffect(()=>{
    console.log("isRegistered",state.user.isRegistered)
    if (state.wallet.web3Instance) {
      console.log("wallet web", state.wallet.web3Instance)
      dispatch(getUserInfo)
    }
    
  },[state.wallet.address])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      {state.user.isRegistered ? (
        <Text>Welcome {state.user.firstname + ' ' + state.user.lastname}</Text>
      ) : (
        <View>
          <Text>Register data</Text>
          <RegisterForm></RegisterForm>
        </View>
      )}
      
    </View>
  )
}