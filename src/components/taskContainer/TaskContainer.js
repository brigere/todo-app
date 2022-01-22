import "./taskContainer.css"
import TaskCard from "../taskCard/TaskCard"
import { useContext } from "react"
import { TodoContext } from "../../App"

function TaskContainer () {
  const [todos, setTodos] = useContext(TodoContext)
  return (
    <div className="task-main-container">
      <div className="todo-container-items">
        <h6 className="todo-conatainer-header">To Do</h6>
        {todos.length === 0 && <p>no items added yet...</p>}
        {todos.map((item, key) =>
          item.status == 'new' &&
          <TaskCard {...item} key={item.id}></TaskCard>
        )}
      </div>
      <div className="todo-container-items">
        <h6>Doing</h6>
        {todos.map((item, key) => item.status == 'doing' &&
          <TaskCard {...item} key={item.id}></TaskCard>
        )}
      </div>
      <div className="todo-container-items">
        <h6>Done</h6>
        {todos.map((item, key) => item.status == 'done' &&
          <TaskCard {...item} key={item.id}></TaskCard>
        )}
      </div>

    </div>
  )
}

export default TaskContainer