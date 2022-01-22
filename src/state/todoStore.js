import react, { createContext } from "react"
import { getAllTodos } from "../services/todo.service"

export const initialCounterSate = { getAllTodos() }

export const counterReducer = (state, action, item) => {
  switch (action.type) {
    case 'start':
      return
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
    }
}

export const Context = createContext()