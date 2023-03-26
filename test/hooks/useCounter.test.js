import {act, render, renderHook} from "@testing-library/react";
import {useCounter} from "../../src/hooks/index.js";

describe('Test on useCounter', function () {

    test('default values', () => {
        const {result} = renderHook(() => useCounter() );
        const {counter, decrement, increment, reset} = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('counter initial 100', () => {
       const {result} = renderHook(() => useCounter(100));
       const {counter} = result.current;
       expect(counter).toBe(100);
    });

    test('call to increment', () => {
        const {result} = renderHook(() => useCounter());
        const {increment} = result.current;

        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(13);

    });

    test('call to decrement', () => {
        const {result} = renderHook(() => useCounter());
        const {decrement} = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(7);

    });

    test('call to reset', () => {
        const {result} = renderHook(() => useCounter());
        const {increment, decrement, reset} = result.current;

        act(() => {
            decrement();
            decrement(2);
            increment();
            increment(2);
            reset()
        });

        expect(result.current.counter).toBe(10);

    });

});