import Button from './Button'
const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={(id) => props.onToggle(props.task.id)}>
            <div className='div3'>
                <h3>{props.task.text} </h3>
                <p>{props.task.day}</p>
                <div className='icon'>
                    <Button  styles="btn-icon" onClick={() => props.onEdit(props.task.id)}>
                        <i className="fa fa-edit" aria-hidden="true" ></i>
                    </Button>
                    <Button  styles="btn-icon" onClick={() => props.onDelete(props.task.id)}>
                        <i className="fa fa-times" aria-hidden="true" ></i>
                    </Button>
                    
                </div>
            </div>
           
        </div>
    )
}

export default Task;
