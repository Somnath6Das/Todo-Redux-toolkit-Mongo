import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, fetchTodo, deleteTodo } from '../redux-state/todoReducer';
import { logout } from '../redux-state/authReducer'; 

export default function Todo() {
  const [myTodo, setMytodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  const addTodo = () => {
    // todo comes from api body
    dispatch(createTodo({ todo: myTodo }))
  }

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch]);

  return (
    <div>
      <input type="text" placeholder='write your todo!' value={myTodo}
        onChange={(e) => setMytodo(e.target.value)}
      />
      <button className='btn #00b0ff light-blue accent-3' onClick={() => addTodo()}>Create Todo</button>
      <ul className="collection">
        {
          todos.map(item => {
            return <li className="collection-item" onClick={() => dispatch(deleteTodo(item._id))} key={item._id}>{item.todo}</li>
          })
        }
      </ul>
      <button className='btn #00b0ff light-blue accent-3' onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}
// jkjlj