import { useState, useEffect } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import WithClass from './hoc/WithClass'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasksFromServer();
      setTasks(taskFromServer);
    }
  
    return getTasks();
  })
  // Fetching tasks from db.json using json-server
  const fetchTasksFromServer = async () =>{
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()
    return data;
  }


  const FormSubmitHandler = async (task) => {
  // Posting task from form into the db.json SERVER
  const res = await fetch('http://localhost:5000/tasks', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  
  const data = await res.json() 
  console.log(data)
  return data;
  };

  const handleDeleteTask = async (id) => {
    // Deleting task with id passed in from server
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
  }

  // Fetching task from db.json using json-server
  const fetchTask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)

  const data = await res.json()
  return data;
  }
  const handleEditTask = async (id) => {
    const taskToEdit = await fetchTask(id)
    const editedTask = {...taskToEdit, edit:!taskToEdit.edit}
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editedTask)
    })
      const data = await res.json()
      setTasks(
        tasks.map((task) => 
          task.id === id ? {...task, edit:data.edit} : task
        )
      )

      console.log(editedTask)
  }
  
  // const getEditTask = () =>{
  //     const taskToEdit = {...tasks}
  //     if(taskToEdit.edit === true){
  //       return taskToEdit
  //     }else{
  //       return ''
  //     }
  // }

  const onToggleTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedToggleTask = {...taskToToggle, reminder:!taskToToggle.reminder}
    // Updating task in the db.json
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedToggleTask)
    })
      const data = await res.json()
      setTasks(
        tasks.map((task) => 
          task.id === id ? {...task, reminder:data.reminder} : task
        )
      )
  }

  // 
  return (
    <WithClass classes="container">
          <Header styles="btn-add" onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
          {showAddTask ? <TaskForm  values={tasks.map(task => task)} AddTaskForm={FormSubmitHandler} /> :
            <h3 style={{ display:'block', fontSize:'1rem', color:'green'}}>Toggle the add button above.</h3>}
          <div className="headline" >Recent Tasks</div>
        
          {tasks.length > 0 ? 
            <Tasks tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onToggle={onToggleTask} /> : 
            <h2 className="div5">No Tasks to show</h2>}
    </WithClass>
  );
}

export default App;
