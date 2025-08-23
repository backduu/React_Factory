import { Button } from 'react-bootstrap';
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

const [newTodo, setNewTodo] = useState<string>('');
const addTodo = () => {
  // newTodo를 todos에 추가
  if(newTodo.trim() !== '') {
    setTodos([
      ...todos,
      {id: Date.now(), text: newTodo, isChecked: false}
    ]);
    setNewTodo('');
  }
}
  return (
    <div className="container mt-5">
      <h1 className="titlebk">오늘 할 일</h1>
      {/* 할 일 추가 관련 */}
      <div className="form-group d-flex align-items-center mb-3">
        <input 
              type="text" 
              className="form-control me-2" 
              placeholder="오늘의 계획을 추가하세요." 
              style={{writingMode: 'horizontal-tb'}}
              onChange={(e)=>setNewTodo(e.target.value)}
              value={newTodo}
        />
        <button 
                className="btn btn-success" 
                style={{whiteSpace: 'nowrap'}}
                onClick={addTodo}
        >추가</button>
      </div>
      {/* 리스트 업 */}
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