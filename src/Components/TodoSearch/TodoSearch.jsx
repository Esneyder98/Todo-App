import React from 'react';
import {TodoContext} from '../../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue,setSearchValue} = React.useContext(TodoContext);
  
  const OnSearchValueChange=(event)=>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return(
    <input className="TodoSearch" placeholder="Cebolla" 
      onChange={OnSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };