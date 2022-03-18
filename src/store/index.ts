import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@services/counter'
import WalletReducer from './wallet'
import UserReducer from './user'

const asyncFunctionMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  // If the "action" is actually a function instead...
  // console.log(action)
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(asyncFunctionMiddleware),
  reducer: {
    counter: counterReducer,
    wallet: WalletReducer,
    user: UserReducer
  }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store