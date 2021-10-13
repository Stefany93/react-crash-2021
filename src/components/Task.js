import { FaBell, FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="heading-button-container">
      <h3 id={task.id}>
        {task.text}{' '}
      </h3>
      
        <button aria-label="Delete task" className="close-button" aria-describedby={task.id}>
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(task.id)}
          />
        </button>
        </div>
      <p>{task.day}</p>
      {task.reminder && 
        <div> <FaBell aria-hidden="true" />  Reminder set</div>      
      }
      
    </div>
  )
}

export default Task
