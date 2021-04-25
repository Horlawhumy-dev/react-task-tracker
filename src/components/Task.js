
const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={(id) => props.onToggle(props.task.id)}>
            <div className='div3'>
                <h3>{props.task.text} </h3>
                <p>Date: {props.task.day}</p>
                <div className='icon'>
                    <i class="fa fa-edit" aria-hidden="true" onClick={() => props.onEdit(props.task.id)}></i>
                    <i class="fa fa-times" aria-hidden="true" onClick={() => props.onDelete(props.task.id)}></i>
                </div>
            </div>
           
        </div>
    )
}

export default Task;
