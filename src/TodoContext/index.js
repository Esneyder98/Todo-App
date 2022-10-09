import React from 'react';
import {useLocalStorage} from './UseLocalStorage'
const TodoContext = React.createContext();

function TodoProvaider(props){
   // Desestructuramos los datos que retornamos de nuestro 
//custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)

const {
    item:todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODO_V1',[])
  
  const [searchValue,setSearchValue]= React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo =>!!todo.completed).length;
  const totalTodos = todos.length;
  
  let searchFilter=[]
  if(!searchValue.length >=1){
    searchFilter = todos;
  }else{
    const searchValueLower= searchValue.toLowerCase()
    searchFilter= todos.filter(todo => todo.text.toLowerCase().includes(searchValueLower))
  }
  
  const addTodo = (text) => {
    
    const newTodos = [...todos];
    newTodos.push(
      {
      completed:false,
      text,
      });
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };
  
  const deleteTodo=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  }
  
   return (
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchFilter,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        
    }}>
        {props.children}
    </TodoContext.Provider>
   ) 
}

export {TodoContext,TodoProvaider}