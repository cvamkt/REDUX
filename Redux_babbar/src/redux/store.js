import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/counter/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})