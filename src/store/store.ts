import { configureStore } from '@reduxjs/toolkit'
import { errorLoggingMiddleware } from './middlewares/errorLogging.middleware'
import rootReducer from './slices'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorLoggingMiddleware)
})

console.log('store', store)
console.log('store.getState', store.getState()) // efficiently debug

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
