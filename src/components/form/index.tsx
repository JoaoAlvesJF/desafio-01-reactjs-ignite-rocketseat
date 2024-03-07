import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './form.module.css'
import { PlusCircle } from "@phosphor-icons/react";

interface Props {
  addNewTask: (taskDescription: string) => void
}

export function Form ({ addNewTask }: Props) {
  const [description, setDescription ] = useState('')

  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault()
 
    addNewTask(description)
    setDescription('')
  }

  function onChangeDescription(event: ChangeEvent<HTMLInputElement>){
    setDescription(event.target.value)
  }

  return(
    <div className={styles.container}>
      <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          name="description"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeDescription}
          value={description} 
        />
        <button>
          Criar
          <PlusCircle size={24}/>
        </button>
      </form>
    </div>
  )
}