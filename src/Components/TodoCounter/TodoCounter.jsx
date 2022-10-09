import React from "react";
import {TodoContext} from '../../TodoContext'
import './TodoCounter.css';


const TodoCounter = () =>{
    const {totalTodos, completedTodos}= React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter"> Has completando {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export  {TodoCounter};