import {TodoItem} from "../../src/08-useReducer/TodoItem.jsx";
import {fireEvent, render, screen} from "@testing-library/react";

describe('Test on TodoItem', function () {
    const todo = {
        id: 1,
        description: 'stone of soul'
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('show todo pending to show', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

    });

    test('show todo done', () => {
        todo.done = true;
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span call to toggle todo -> done', () =>{
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalled();
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('span call to delete todo -> done', () =>{
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);
        const buttonElement = screen.getByRole('button', {name: 'Delete'});
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalled();
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });




});