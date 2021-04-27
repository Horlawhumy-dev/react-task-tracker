import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import WithClass from './hoc/WithClass'


function App() {
  
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Going to see doctor!',
    day: 'April 26th at 3:30pm',
    reminder: true
    },
    {
    id: 2,
    text: 'Having class today!',
    day: 'April 26th at 1:30pm',
    reminder: false
    },
    {
    id: 3,
    text: 'Will have Iftar in the evening',
    day: 'April 26th at 7:00pm',
    reminder: true
    },
    {
    id: 4,
    text: 'Going to mosque fro solat zuhr',
    day: 'April 26th at 1:30pm',
    reminder: true
    },
    {
    id: 5,
    text: 'Have to work on my django blog project',
    day: 'April 30th at 5:00am',
    reminder: false
    }
  ])
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // setTasks([
    //   {
    //     id: tasks.length === 0 ? 1 : tasks.id++,
    //     text: 
    //   }
    // ])
  };

  const handleDeleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleEditTask = (id) => {
      console.log('Task deleted....', id)
  }
  
  const onToggleTask = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder:!task.reminder} : task
      )
    )
  }

  return (
    <WithClass classes="container">
        <Header />
        <TaskForm  onSubmit={handleFormSubmit} 
          text="text" 
          placeholder1="Type your task here..."  
          placeholder2="Date of task here..."/>

          <div className="headline" >Recent Tasks</div>

          {tasks.length > 0 ? 
            <Tasks tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onToggle={onToggleTask} /> : 
            <h2 className="div5">No Tasks to show</h2>}
    </WithClass>
  );
}

export default App;
