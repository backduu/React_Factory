import React from 'react';
import './App.css';
import FuncCom from './FuncCom';
import TodoList from './TodoList'

const App : React.FC = () => {
  return (
    <div>
      <TodoList title="오늘 할 일"></TodoList>
    </div>
  )
}

export default App
