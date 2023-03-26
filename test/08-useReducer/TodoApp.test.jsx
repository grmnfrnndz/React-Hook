import {render, screen} from "@testing-library/react";
import {TodoApp} from "../../src/08-useReducer/TodoApp.jsx";
import {useTodo} from "../../src/08-useReducer/useTodo.js";
jest.mock("../../src/08-useReducer/useTodo.js");

describe('Test  on TodoApp', function () {

    useTodo.mockReturnValue({
            todos: [
                {id: 1, description: 'todo 1', done: false},
                {id: 2, description: 'todo 2', done: true},
            ],
            todosCount: 2,
            todosPending: 1,
            onNewTodo: jest.fn(),
            onToggleTodo: jest.fn(),
            onDeleteTodo: jest.fn()
        });

    test('show success', () => {
        render(<TodoApp/>);
        // text exist in render
        expect(screen.getByText('todo 1')).toBeTruthy();
        expect(screen.getByText('todo 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});