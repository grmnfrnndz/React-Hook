import {render, screen} from "@testing-library/react";
import {MainApp} from "../../src/09-useContext/MainApp.jsx";
import {MemoryRouter} from "react-router-dom";

describe('Test on MainApp', function () {

    test('show HomeScreen', () => {
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('HomeScreen')).toBeTruthy();

        screen.debug();
    });

    test('show Navigator LoginScreen', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('LoginScreen')).toBeTruthy();

        screen.debug();
    });





});