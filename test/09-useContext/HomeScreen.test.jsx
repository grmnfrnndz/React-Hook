import {render, screen} from "@testing-library/react";
import {HomeScreen} from "../../src/09-useContext/HomeScreen.jsx";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('Test on HomeScreen', function () {

    const user = {
        id: 1,
        name: 'lepmah'
    }

    test('show component', () => {
        render(
            <UserContext.Provider value={{user: null}}>
            <HomeScreen/>
            </UserContext.Provider>)

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');

        screen.debug();
    });

    test('show component with user', () => {
        render(
            <UserContext.Provider value={{user}}>
            <HomeScreen/>
            </UserContext.Provider>)

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(`${user.id}`);

        screen.debug();
    });

});