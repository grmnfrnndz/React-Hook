import React, {useCallback, useState} from 'react';
import {ShowIncrement} from "./ShowIncrement.jsx";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value)=> {
        setCounter((counter) => counter + value)
    }, []);

    // const incrementFather = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>CallBackHook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={incrementFather} />

        </>
    );
}