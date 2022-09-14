import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({                 //reducer
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {            //action 1
            state.value += 1
        },
        decrement: (state) => {            //action 2
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {           //action 3
            state.value += action.payload               //value and payload type must be same
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer