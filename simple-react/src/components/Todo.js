import React from 'react';
const Todo = ( {value}) => {
    return(
        <div className="todo">
            <li className="todo-item">{value}</li>
            <button className="complete-btn"><i className="fas fa-check"></i></button>
            <button className="trash-btn" ><i className="fa fa-trash"></i></button>
        </div>

    );

}
export default Todo ;