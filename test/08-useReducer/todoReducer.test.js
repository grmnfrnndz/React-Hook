import {todoReducer} from "../../src/08-useReducer/todoReducer.js";

describe('Test on todoReducer', function () {

    const initialState = [{
        id: 1,
        description: 'lepmah',
        done: false
    }]


    test('return initial state', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('add new todo', () => {
        const newTodo = {
            type: '[Todo] Add Todo',
            payload: {
                id: 2,
                description: 'kairon',
                done: false
            }
        }

        const newState = todoReducer(initialState, newTodo);

        expect(newState.length).toBe(2);
        expect(newState).toContain(newTodo.payload);

    })

    test('remove todo', () => {
        const newTodo = {
            type: '[Todo] Delete Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, newTodo);

        expect(newState.length).toBe(0);
        expect(newState).toEqual([]);

    })

    test('toogle todo', () => {
        const newTodo = {
            type: '[Todo] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, newTodo);
        expect(newState[0].done).toBe(true);
        expect(newState).toEqual([{...initialState[0], done: true}]);

    })

});