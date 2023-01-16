import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions/index';

export const Counter = () => {

    const counter = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(1));
    };

    const handleDecrement = () => {
        dispatch(decrement(1));
    };

    return (
        <div>
            <h1>Counter {counter} </h1>
            <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
            <button className='btn btn-primary' onClick={handleDecrement}>Decrement</button>
        </div>
    );
}