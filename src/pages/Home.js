
import Header from "../components/header/Header"
import TaskContainer from "../components/taskContainer/TaskContainer";
import TaskForm from "../components/taskForm/TaskForm";

function Home () {

  return (
    <>
      <Header></Header>
      <TaskForm></TaskForm>
      <TaskContainer></TaskContainer>
    </>
  )
}

export default Home;