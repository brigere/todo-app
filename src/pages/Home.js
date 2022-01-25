
import Header from "../components/header/Header"
import AlertPanel from "../components/notifications/AlertPanel";
import TaskContainer from "../components/taskContainer/TaskContainer";
import TaskForm from "../components/taskForm/TaskForm";
import { getUser } from "../services/user.service";
import { useState } from "react";

function Home () {
  // const [user, setUser] = useState(getUser())
  // const [displayWelcomeMessage, setDisplay] = useState(true)
  
  return (
    <>
      {/* {user && displayWelcomeMessage && 
      <AlertPanel 
        user={user} 
        setDisplay={setDisplay}>
      </AlertPanel>} */}
      <Header></Header>
      <TaskForm></TaskForm>
      <TaskContainer></TaskContainer>
    </>
  )
}

export default Home;