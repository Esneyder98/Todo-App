import React from 'react';
import  {TodoContext} from '../TodoContext';
import  {TodoCounter} from '../Components/TodoCounter/TodoCounter';
import  {TodoSearch}  from '../Components/TodoSearch/TodoSearch';
import  {TodoList}  from "../Components/TodoList/TodoList";
import  {TodoItem} from "../Components/TodoItem/TodoItem";
import {CreateTodoButton}  from "../Components/CreateTodoButton/CreateTodoButton";
import {Modal} from "../Components/Modal/";
import { TodoForm } from '../Components/Modal/TodoForm/TodoForm';

import {TodoError} from "../Components/TodoError/TodoError"
import {TodosLoading} from "../Components/TodosLoading/TodosLoading"
import {EmptyTodos} from "../Components/EmptyTodos/EmptyTodos"

const AppUI = () => {
    const {
      error,
      loading,
      searchFilter,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
          {error && <TodoError error={error}/>}
          {loading && <TodosLoading/>}
          {(!loading && !searchFilter.length) && <EmptyTodos/>}
          {searchFilter.map(todo => (
          <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
              />
              ))}
      </TodoList>

      {!!openModal&&(
        <Modal>
            <TodoForm></TodoForm>
        </Modal>
      )}    
        
      
      <CreateTodoButton 
      />
    </React.Fragment>
    );
}

export {AppUI};
