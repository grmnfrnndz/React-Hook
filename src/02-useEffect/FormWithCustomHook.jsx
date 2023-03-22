import React, {useEffect, useState} from 'react';
import {UseForm} from "../hooks/useForm.js";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, password, email} = UseForm({
            username: '',
            email: '',
            password: ''
        }
    );

    // const {username, email, password} = formState;

    return (
        <>
            <h1>FormWithCustomHook</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
               />
            <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
        </>
    );
}