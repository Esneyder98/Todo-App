import React from 'react';
import { AppUI } from './appUI';
import {TodoProvaider} from '../TodoContext/index';

function App() {



  return (
    <TodoProvaider>
      <AppUI/>
    </TodoProvaider>
    
  );
}

export default App;