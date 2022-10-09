import React from 'react';
import {TodoContext} from '../../../TodoContext/index'
import './TodoForm.css'
const TodoForm = () => {
    const [newTodoValue,setnewTodoValue]=React.useState('')
    const{
        addTodo,
        setOpenModal
    }= React.useContext(TodoContext);

    const onChange= (event)=>{
        setnewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }
    return (
        <form  onSubmit={onSubmit}>
           <label>Escribe tu nuevo TODO</label> 
           <textarea 
           value={newTodoValue}
           onChange={onChange}
           placeholder="Cortar la cebolla para el almuerzo"/>
           <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>Cancelar</button>

                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    >Anadir</button>
           </div>
        </form>
    );
}

export  {TodoForm};
