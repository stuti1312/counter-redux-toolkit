import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlices'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

//configs
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch