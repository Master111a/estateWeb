import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import estateSlice from './pages/Estate_Web/estate.slice'
export const store = configureStore({
  reducer: {
    estate: estateSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispath = () => useDispatch<AppDispatch>()
