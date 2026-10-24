import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "./languageSlice";


export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
