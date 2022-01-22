import { Context } from "../../state/counterSore"
import { useContext } from "react"

function Counter () {
const { store, dispatch } = useContext(Context)
return (
  <>
    <h1>Hello</h1>
    <p>{store.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>add</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>minus</button>
  </>
)
}

export default Counter