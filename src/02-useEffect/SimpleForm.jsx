import React, {useEffect, useState} from 'react';
import {Message} from "./Message.jsx";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'lepmah',
        email: 'lepmah@lepmah.cl'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect CallBack');
    }, []);

    useEffect(() => {
        // console.log('formState Change');
    }, [formState]);


    useEffect(() => {
        // console.log('email Change');
    }, [email]);


    return (
        <>
            <h1>SimpleForm</h1>
            <hr/>
            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
               />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="username@username.cl"
                name="email"
                value={email}
                onChange={onInputChange}
               />

            {
                (username == 'lepmah') && <Message className="mt-2"/>
            }
        </>
    );
}