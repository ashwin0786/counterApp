import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/UI/Button';
import data from '../config/data.json';
import type { RootState, AppDispatch } from '../store';
import { counterActions } from '../store/counterSlice';


const ButtonWrapper = styled.div`
    width: 12rem;
    height: 5rem;
    border-top: 1px solid #ccc;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
    margin-top: 2rem;
`;

const CounterWrapper = styled.div`
    width: 12rem;
    height: 2rem;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
`;

const CounterPage:React.FC = () => {
    const counterVal = useSelector((state: RootState) => state.counter.counterVal);
    const isRunning = useSelector((state: RootState) => state.counter.isRunning);
    const timer = useSelector((state: RootState) => state.counter.timer);
    const dispatch = useDispatch<AppDispatch>();
    

    function startstopClick() {
        if(!isRunning) {
            dispatch(counterActions.setTimer(window.setInterval(() => {
                dispatch(counterActions.incrementCounter());
            }, 1000)));
        } else {
            dispatch(counterActions.clearTimer());
        }
        dispatch(counterActions.toggleStatus());
    }

    function resetClick() {
        dispatch(counterActions.clearTimer());
        dispatch(counterActions.resetCounter());
    }

    return (
        <>
            <CounterWrapper>{data.counter+ '' +counterVal}</CounterWrapper>
            <ButtonWrapper>
                <Button handleClick={startstopClick}>{ isRunning ? data.pause : data.start }</Button>
                <Button handleClick={resetClick}>{ data.reset }</Button>
            </ButtonWrapper>
        </>
    );
}

export default CounterPage;