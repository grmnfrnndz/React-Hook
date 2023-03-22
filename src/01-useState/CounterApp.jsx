import React, {useState} from 'react';

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 30,
        counter3: 30,
    });

    return (
        <>
            <h1>Counter: {state.counter1}</h1>
            <h2>Counter: {state.counter2}</h2>
            <h3>Counter: {state.counter3}</h3>
            <hr/>
            <button className="btn btn-primary" onClick={
                () => {
                    setCounter({
                        ...state,
                        ...{
                            counter1: state.counter1 + 1
                        }
                    });
                }
            }>+1</button>
        </>
    );
}