import React, {useEffect, useReducer} from 'react';
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";
import {UseTodo} from "./useTodo.js";


export const TodoApp = () => {

    const {todos, todosCount, todosPending, onNewTodo, onToggleTodo, onDeleteTodo} = UseTodo();

    return (
        <>
            <h1>TodoApp ({todosCount}) <span>Pending: { todosPending }</span></h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
                </div>
                <div className="col-5">
                    <h4>Add Todo</h4>
                    <hr/>
                    <TodoAdd onNewTodo={onNewTodo}/>
                </div>
            </div>
        </>
    );
}