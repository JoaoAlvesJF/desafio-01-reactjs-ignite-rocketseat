import { useState } from "react";
import { Header } from "./components/header"
import './globals.css'
import { Form } from "./components/form";
import { Tasks } from "./components/tasks";
//import styles from './App.module.css'

export interface ITaskList {
  id: string;
  description: string;
  isConcluded: boolean; 
}

export default function App() {

  const [ tasks, setTasks ] = useState<ITaskList[]>([])

  function createNewTask(taskDescription: string) {
  
    const newTask: ITaskList = {
      id: crypto.randomUUID(),
      description: taskDescription,
      isConcluded: false,
    }
    setTasks([...tasks, newTask])
    console.log(tasks);
  
  }

  function deleteTaskById (taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
  }

  function changeTaskIsConcluded (taskId: string) {
    const newTasks = tasks.map((task) => {

      if(task.id === taskId) {
        return{
          ...task,
          isConcluded: !task.isConcluded
        }
      }
      return task
    })
    setTasks(newTasks)

  }


  return (
    <>
      <Header />
      <Form addNewTask={createNewTask} />
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskById} 
        onConcluded={changeTaskIsConcluded} />
    </>
  )
}
