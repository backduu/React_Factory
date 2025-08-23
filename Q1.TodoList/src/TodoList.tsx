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

const handleCheckBoxChange = (itemId : number) => {
    setTodos((prevItems) =>
      prevItems.map((item)=>
            item.id === itemId ? {...item, isChecked : !item.isChecked} : item
        )  
    );
}

  return (
    <div className="container">
      <h1 className="titlebk">오늘 할 일</h1>
      <div className="container">
        <div className="board">
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <input type="checkbox"
                                onChange={()=>{
                                    handleCheckBoxChange(todo.id);
                                }}
                            />
                            <span>
                                {
                                    todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>
                                }
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList;