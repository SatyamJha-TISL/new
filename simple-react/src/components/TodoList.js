import React from 'react';
import  Todo from './Todo' ;
const TodoList = ({todos}) => {
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {
                todos.map((todo) => {
                    return (
                    <Todo value = {todo.text}  
                     />

                 ) ;})
            }
        
        </ul>
    </div>

    );
};
export default TodoList ;