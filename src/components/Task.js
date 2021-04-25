
const Task = (props) => {
    return (
        <div className='task'>
            <div className='div3'>
                <h3>{props.task.text} </h3>
                <div className='icon'>
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
             <p>Date: {props.task.day}</p>
        </div>
    )
}

export default Task;
