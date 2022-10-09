import React from 'react';
import './CreateTodoButton.css';
import {TodoContext} from '../../TodoContext'
function CreateTodoButton() {
  const {openModal,setOpenModal}= React.useContext(TodoContext);
  const onClickButton= ()=>{
    setOpenModal(!openModal);
  }
  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}> + </button>
  )
}

export { CreateTodoButton };