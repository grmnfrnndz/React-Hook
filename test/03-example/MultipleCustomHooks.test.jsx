import {fireEvent, render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-example/MultipleCustomHooks.jsx";
import {useFetch} from "../../src/hooks/useFetch.js";
import {useCounter} from "../../src/hooks/useCounter.js";

jest.mock("../../src/hooks/useFetch.js");
jest.mock("../../src/hooks/useCounter.js");

describe('Test on MultipleCustomHooks', function () {

    const onIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: onIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        })

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeTruthy();
    });

    test('Should be show one quote', () => {
        const quote = {
            author: 'lepmah',
            quote: 'soy el mejor'
        }

        useFetch.mockReturnValue({
            data: [quote],
            isLoading: false,
            hasError: null,
        })

        render(<MultipleCustomHooks/>);

        expect(screen.getByText(quote.author));
        expect(screen.getByText(quote.quote));

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('call to next quote - increment', () => {
        const quote = {
            author: 'lepmah',
            quote: 'soy el mejor'
        }

        useFetch.mockReturnValue({
            data: [quote],
            isLoading: false,
            hasError: null,
        })

        render(<MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        fireEvent.click(nextButton);

        expect(onIncrement).toHaveBeenCalled();


    });


});