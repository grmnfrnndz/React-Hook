import {fireEvent, render, screen} from "@testing-library/react";
import {LoginScreen} from "../../src/09-useContext/LoginScreen.jsx";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('Test on LoginScreen', function () {

    const user = {
        id: 1,
        name: 'lepmah'
    }

    test('call user null', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginScreen/>
            </UserContext.Provider>)
        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');
    });


    test('call to set user click', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user:null, setUser: setUserMock}}>
            <LoginScreen/>
            </UserContext.Provider>)

        const buttonElement = screen.getByRole('button', {name: 'Set User'});
        fireEvent.click(buttonElement);

        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'german', 'age': 36});

    });

});