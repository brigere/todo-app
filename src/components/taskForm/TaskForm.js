import { useContext, useState } from "react"
import { TodoContext } from "../../App"
import { generateNewID } from "../../utils/date"
import "./taskForm.css"

function TaskForm () {
  const [todos, setTodos] = useContext(TodoContext)
  const [task, setTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    let date = new Date()
    let id = generateNewID(date)

    if (task.length == 0) {
      alert('The form is empty')
      return
    }

    const newTodo = {
      id: id,
      createdDate: date.toISOString(),
      startedDate: null,
      finishedDate: null,
      title: task,
      status: 'new'
    }

    setTodos([
      ...todos,
      newTodo
    ])
    setTask('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>New task:</span>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <input className="submit-button" type="submit" value="Add" />
      </form>
    </>
  )
}

export default TaskForm