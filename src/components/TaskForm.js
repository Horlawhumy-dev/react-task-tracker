import Button from './Button'
import { useState } from 'react'


const TaskForm = ({ AddTaskForm }) => {
    // Setting and Desctructuring using react useState for stateless components 
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        // Validating the these two inputs
        if(!text || !day){
            alert('Fill in all inputs')
            return
        }
        // This is calling the form submit method in app.js by setting the task passed in to be object of this
        AddTaskForm({text, day, reminder})
        console.log({text, day, reminder})
        // Clearing the form inputs after submission
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
       <form onSubmit={onSubmit}>
            <input 
                className='inputVal' 
                onChange={(e) => setText(e.target.value)} 
                type="text" placeholder="Add Task ...." 
                value={text}/>
            <input 
                className='inputVal' 
                type="text" 
                placeholder="Add Day & Time..."
                onChange={(e) => setDay(e.target.value)}
                value={day}/>
            <div className='div6'>
                <input type="checkbox" 
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}/> 
                <span>Remainder</span>          
            </div>
            <Button type="submit" styles="btn"> Task</Button>
       </form>
    )
}

export default TaskForm;