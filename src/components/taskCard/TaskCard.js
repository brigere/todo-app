import './taskCard.css'
import { month } from '../../utils/date'
import { useContext } from 'react'
import { TodoContext } from '../../App'

const buttonText = {
  new: 'Start',
  doing: 'Finish',
  done: 'Clear'
}

const defaultAction = {
  new: 'doing',
  doing: 'done',
  done: 'clear'
}

function CardHeader ({ status, createdDate, startedDate, finishedDate }) {
  let _createdDate = new Date(createdDate)
  let _startedDate
  let _finishedDate

  let element
  switch (status) {
    case 'new':
      element = <div className='card-header'>
        <div className='date-left'>created: {month[_createdDate.getMonth()]}-{_createdDate.getDate()}</div>
      </div>
      break
    case 'doing':
      _startedDate = new Date(startedDate)
      element = <div className='card-header'>
        <div className='date-left'>created: {month[_createdDate.getMonth()]}-{_createdDate.getDate()}</div>
        <div className='date-right'>started: {month[_startedDate.getMonth()]}-{_startedDate.getDate()}</div>
      </div>
      break
    case 'done':
      _finishedDate = startedDate == null ? '' : new Date(startedDate)
      element = <div className='card-header'>
        <div className='date-left'>created: {month[_createdDate.getMonth()]}-{_createdDate.getDate()}</div>
        <div className='date-right'>finished: {month[_createdDate.getMonth()]}-{_createdDate.getDate()}</div>
      </div>
      break
  }
  return element
}

function TaskCard ({ id, createdDate, status, title, finishedDate, startedDate }) {
  let _createdDate = new Date(createdDate)

  const [todos, setTodos] = useContext(TodoContext)

  function manageAction () {
    if (status === 'done') {
      let filteredTodos = todos.filter(item => item.id != id)
      setTodos([...filteredTodos])
    } else {
      todos.map(item => {
        if (id == item.id) {
          item.status = defaultAction[status]
          if (item.status == 'doing') item.startedDate = new Date().toISOString()
          if (item.status == 'done') item.finishedDate = new Date().toISOString()
        }
      })
      setTodos([...todos])
    }
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  return (
    <div className="card">
      <CardHeader
        status={status} createdDate={createdDate}
        startedDate={startedDate} finishedDate={finishedDate}>
      </CardHeader>
      <div className='card-content'>
        <p>{title}</p>
      </div>
      <div className='card-footer'>
        <button
          onClick={manageAction}>
          {buttonText[status]}
        </button>
      </div>
    </div>
  )
}

export default TaskCard