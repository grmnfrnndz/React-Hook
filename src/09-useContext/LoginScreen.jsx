import React, {useContext} from 'react';
import {UserContext} from "./context/UserContext.jsx";

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>LoginScreen</h1>
            <hr/>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => setUser({id: 123, name: 'german', 'age': 36})}
            >
                Set User
            </button>

        </>
    );
}