import './App.css';
import { useEffect } from 'react';
import Auth from './components/Auth';
import Todo from './components/Todo';
import { useSelector, useDispatch } from 'react-redux';
import { addToken } from './redux-state/authReducer';
function App() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(addToken());
  },[dispatch])
  
  return (
    <div className="App">
      {token ? <Todo /> : <Auth />}
    </div>
  );
}

export default App;
