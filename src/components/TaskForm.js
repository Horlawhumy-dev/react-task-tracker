import Button from './Button'
import { useState } from 'react'


const TaskForm = ({ AddTaskForm, values }) => {
    // Setting and Desctructuring using react useState for stateless components 
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [edit, setEdit] = useState(false)
    
   

    // console.log(text,day,reminder)
    const onSubmit = (e) => {
        e.preventDefault()
        // Validating the these two inputs
        if(!text || !day){
            alert('Fill in all inputs')
            return
        }

        if(values.edit === true){
            setText(values.text)
            setDay(values.day)
            setReminder(values.reminder)
            AddTaskForm({text, day, reminder, edit})
        }else{
            // This is calling the form submit method in app.js by setting the task passed in to be object of this
            AddTaskForm({text, day, reminder, edit})
            // Clearing the form inputs after submission
            setText('')
            setDay('')
            setReminder(false)
            setEdit(false)
        }
      
    }
    return (
       <form onSubmit={onSubmit}>
            <input 
                className='inputVal' 
                onChange={(e) => setText(e.target.value)} 
                value={text}
                type="text" placeholder="Add Task ...." 
                
                />
            <input 
                className='inputVal' 
                type="text" 
                placeholder="Add Day & Time..."
                onChange={(e) => setDay(e.target.value)}
                value={day}
                />
            <div className='div6'>
                <input type="checkbox" 
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    value={reminder}/> 
                <span>Remainder</span>          
            </div>
            <Button type="submit" styles="btn"> 
                <i className="fa fa-plus" aria-hidden="true" ></i>
                Task
            </Button>
       </form>
    )
}

export default TaskForm;