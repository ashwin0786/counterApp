import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from '../model';

const initialState: CounterState = { isRunning: false, counterVal: 0, timer: 0};

const incrementCounter: CaseReducer<CounterState> = (state) => {
    state.isRunning = true;
    state.counterVal++;
};

const toggleStatus: CaseReducer<CounterState> = (state) => {
    state.isRunning = !state.isRunning;
};

const resetCounter: CaseReducer<CounterState> = (state) => {
    state.isRunning = false;
    state.counterVal = 0;
};

const setTimer: CaseReducer<CounterState, PayloadAction<number>> = (state, action) => {
    state.timer = action.payload;
};

const clearTimer: CaseReducer<CounterState> = (state) => {
    clearInterval(state.timer);
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter,
        toggleStatus,
        resetCounter,
        setTimer,
        clearTimer
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
