import PropTypes from 'prop-types';
import React, {useState} from "react";
import {UseForm} from "../hooks/index.js";

export const TodoAdd = ({onNewTodo}) => {

    const {formState, onInputChange, onResetForm, todo} = UseForm({
            todo: '',
        }
    );

    const onSubmit = (event) => {
        event.preventDefault();
        const value = todo.trim();
        if (value.length <= 3) return;
        onNewTodo({
            id: new Date().getTime() + 200,
            description: value,
            done: false,
        });
        onResetForm();
    }

    return (
        <>
            <form onSubmit={ onSubmit } aria-label="form">
                <input
                    name="todo"
                    className="form-control"
                    type='text'
                    placeholder='todo'
                    value={todo}
                    onChange={ onInputChange }
                />
                <button type="submit" className="btn btn-outline-primary">
                    Send
                </button>
            </form>
        </>
    );
}


TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}