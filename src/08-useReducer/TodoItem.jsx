import React from 'react';
import PropTypes from "prop-types";

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    return (
        <>
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                <span className={`align-self-center ${ todo.done && 'text-decoration-line-through' || '' }`}
                onClick={() => {onToggleTodo(todo.id)}}
                aria-label="span"
                >
                    {todo.description} {todo.done}
                </span>
                <button
                    onClick={() => onDeleteTodo(todo.id)}
                    className="btn btn-danger">Delete</button>
            </li>
        </>
    );
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
}