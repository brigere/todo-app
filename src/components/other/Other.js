import { Context } from "../../state/counterSore"
import { useContext } from "react"
import { userContext } from "../../pages/Home"

function Other () {
const { store, dispatch } = useContext(Context)
const [user, setUser] = useContext(userContext)
return (
  <>
    <button onClick={() => dispatch({type:'increment'})}>add</button>
    <button onClick={() => dispatch({type:'reset'})}>reset</button>
    <p>{user.name}</p>
    <p>{user.age}</p>
    <button onClick={() => {setUser({name:'Mark', age:55})}}>Change user from Other.js</button>
  </>
)
}

export default Other