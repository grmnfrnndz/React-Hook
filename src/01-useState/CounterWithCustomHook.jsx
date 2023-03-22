import React from 'react';
import {useCounter} from "../hooks/useCounter.js";

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(0);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button className="btn btn-success" onClick={() => decrement(1)}>-1</button>
        </>
    );
}