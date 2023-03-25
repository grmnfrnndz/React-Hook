import React, {useState} from 'react';
import {UserContext} from "./UserContext.jsx";


// const user = {
//     id: 123,
//     name: 'lepmah',
//     age: 36
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();


    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}