import Button from './Button'

const TaskForm = ({onSubmit,text, placeholder1, placeholder2, task, date}) => {
    return (
       <form onSubmit={onSubmit}>
            <input className='inputVal' type={text} placeholder={placeholder1} value={task}/>
            <input className='inputVal' type={text} placeholder={placeholder2} value={date}/>
            <div className='div6'>
                <input type="checkbox" /> 
                <span>Remainder</span>          
            </div>
            <Button type="submit" text=" Task"/>
       </form>
    )
}

export default TaskForm;