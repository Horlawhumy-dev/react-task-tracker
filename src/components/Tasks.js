import Task from './Task'
import Wrap from '../hoc/Wrap'
const Tasks = (props) => {
    return (
        <Wrap>
         {props.tasks.map((task) => (
             <Task key={task.id} task={task} onDelete={props.onDelete} onEdit={props.onEdit} onToggle={props.onToggle} />
            
         ))}
        </Wrap>
    )
}

export default Tasks;
