import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { getAllTodos } from './services/todo.service'

export const TodoContext = createContext()

function App () {
  const [todos, setTodos] = useState(getAllTodos())
  
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      <Home></Home>
    </TodoContext.Provider >    
  )
}

export default App;
