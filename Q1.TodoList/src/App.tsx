import React from 'react';
import './App.css';
import TodoList from './TodoList'

const App : React.FC = () => {
  return (
    <div className='board'>
      <TodoList></TodoList>
    </div>
  )
}

export default App
