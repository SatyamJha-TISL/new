import React from 'react';

const Form = ({setInputText , InputText , setTodo,todos, setstate} ) => {
    //Here I can javascript code and function 
    const InputTextHandler = (e) => {
        setInputText(e.target.value);  
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodo ([
            ...todos ,
            {text : InputText , completed:false , id : Math.random() * 100}
        ]);
        setInputText(" ");
    };
    const stateHandler = (e) => {
       setstate(e.target.value);
    }

    return (
        <form >
        <input value = {InputText} onChange = {InputTextHandler} type="text" className="todo-input"/>
        <button onClick = {submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange = {stateHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Complete</option>
                <option value="Incomplete">Incomplete</option>
            </select>
        </div>
    </form>
    );
};

export default Form ;