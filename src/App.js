import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'



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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
