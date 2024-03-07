import { Task } from '../task/index'
import styles from './tasks.module.css'
import { ITaskList } from '../../App'
import { ClipboardText } from '@phosphor-icons/react';

interface Props {
  tasks: ITaskList[];
  onDelete: (taskId: string) => void
  onConcluded: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onConcluded }: Props){
  const tasksListQuantity = tasks.length
  const tasksConcluded = tasks.filter((task) => task.isConcluded).length

  return (
    <section className={styles.tasks}>
    <header className={styles.header}>
      <div>
        <p>Tarefas criadas</p>
        <span>{tasksListQuantity}</span>
      </div>

      <div>
        <p className={styles.textPurple}>Concluidas</p>
        {tasks.length <= 0 ? (
          <span> {tasksListQuantity}</span>
        ) : (
          <span>{tasksConcluded} de {tasksListQuantity}</span>
        )}
        
      </div>
    </header>
    <section className={styles.list}>
      { tasks.map((task) => {
        return (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete}
            onConcluded={onConcluded}
          />
        )
      })}

      {tasks.length <= 0 && (
        <section className={styles.empty}>
          <ClipboardText className={styles.boardIcon} size={56}/>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </section>
      )}
    </section>
  </section>
  )
}