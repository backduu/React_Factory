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
    <div className="container mt-5">
      <h1 className="titlebk">오늘 할 일</h1>
      <div className="card">
        <div className="card-body">
            <ul className="list-group">
                {
                    todos.map((todo)=>(
                        <li key={todo.id} 
                            className="list-group-item d-flex justify-content-getween align-items-center"
                        >
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input"
                                    onChange={()=>{
                                        handleCheckBoxChange(todo.id);
                                    }}
                                />
                                <label className="form-check-label">
                                    {
                                        todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>
                                    }
                                </label>
                            </div>
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