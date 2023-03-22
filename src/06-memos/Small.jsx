import React, {memo} from 'react';

export const Small = memo(({counter}) => {

    console.log('hola')

    return (
        <>
            <small>{counter}</small>
        </>
    );
})