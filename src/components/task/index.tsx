import { ITaskList } from '../../App';
import styles from './task.module.css'
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

interface Props {
  task: ITaskList
  onDelete: (taskId: string) => void
  onConcluded: (taskId: string) => void
}

export function Task({task, onDelete, onConcluded}: Props) {

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => {onConcluded(task.id)}}>
        {task.isConcluded ? <CheckCircle weight="fill" className={styles.checkedIcon} size={24} /> : <Circle className={styles.checkIcon} size={24} /> }
      </button>
      <p className={task.isConcluded ? styles.textConcluded : ''}>
        {task.description}
      </p>
      <button className={styles.deleteButton} onClick={() => {onDelete(task.id)}}>
        <Trash className={styles.trashIcon} size={24} />
      </button>
    </div>
  )
}