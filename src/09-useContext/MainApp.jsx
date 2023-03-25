import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomeScreen} from "./HomeScreen.jsx";
import {LoginScreen} from "./LoginScreen.jsx";
import {AboutScreen} from "./AboutScreen.jsx";
import {NavBar} from "./NavBar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <NavBar/>
            <hr/>

            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="login" element={<LoginScreen/>}/>
                <Route path="about" element={<AboutScreen/>}/>

                {/*<Route path="/*" element={<LoginScreen/>}/>*/}
                // redirect to about screen
                <Route path="/*" element={<Navigate to={'/about'} />}/>
            </Routes>
        </UserProvider>
    );
}