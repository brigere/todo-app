import react, { createContext } from "react"

export const initialCounterSate = { count: 0 }

export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialCounterSate
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
    }
}

export const Context = createContext()