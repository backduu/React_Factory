import './App.css';
import { useState } from 'react';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}

const TodoList : React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1001, text: '리액트 공부하기', isChecked: false},
    {id: 1002, text: '하체랑 삼두 조지기', isChecked: false},
    {id: 1003, text: '좀비섬 조지기', isChecked: false}
  ]);

  return (
    <div className="container">
      <h1 className="titlebk">오늘 할 일</h1>
      <div className="container">
        <div className="board">
            <ul>
                {
                    todos.map(
                        (
                            todo => (
                                <li>{todo.text}</li>
                            )
                        )
                    )
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList;