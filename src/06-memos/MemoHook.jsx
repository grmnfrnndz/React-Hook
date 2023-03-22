import React, {useMemo, useState} from 'react';
import {useCounter} from "../hooks/index.js";
import {Small} from "./Small.jsx";

const heaveyStuff = (iterationNumber) => {
    for (let num = 0; num < iterationNumber; num++) {
        console.log('go!!!')
    }
    return `iterationNumber: ${iterationNumber}`;
}



export const MemoHook = () => {
    const {counter, increment} = useCounter(1000)
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heaveyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{memorizeValue}</h4>

            <button
            className="btn btn-primary"
            onClick={() => increment()}
            >
                +1
            </button>

            <button
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    );
}