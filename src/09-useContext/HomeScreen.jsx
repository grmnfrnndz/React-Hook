import React, {useContext} from 'react';
import {UserContext} from "./context/UserContext.jsx";

export const HomeScreen = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <h1>HomeScreen <small>{user?.name}</small></h1>
            <hr/>
            <pre aria-label="pre">
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    );
}