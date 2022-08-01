import './App.css';
import {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("")
  
  const [newPrio, setPrio] = useState("")


  

  const taskNode = tasks.map((task, index) => { 
    return(
      <li key={index} className={task.priority}>
        <span>
            {task.name}
        </span>
        <span>
            {task.priority}
        </span>
      </li>
    )
  });

  const handlePrioInput = (event) =>{
    setPrio(event.target.value)
  }


  const handleTaskInput = (event) =>{
    setNewTask(event.target.value)
  };


const saveTask = (event) => {
  event.preventDefault()
  const copyTask = [...tasks];
  copyTask.push({name: newTask, priority: newPrio });
  setTasks((copyTask))
  setNewTask("");
}


  return(
    <div className="app">
      <h1>To do list</h1>



    <form onSubmit={saveTask}>


      <label htmlFor='new-task'>Add to list</label>

      <input type="text"
      id='new-task'
      value={newTask}
      onChange= {handleTaskInput}
      placeholder="Add to list" 
      required/>

      <label className='option 1'>
            <input
              type="radio"
              name="prio"
              value="High"
              className="form-check-input"
              onChange={handlePrioInput}
              required
            />
            High
        </label>
      <label className='option 2'>
            <input
              type="radio"
              name="prio"
              value="Low"
              className="form-check-input"
              onChange={handlePrioInput}
              required
            />
            Low
        </label>


  
      <input type="submit" value="Add"/>
    </form>


    <hr/>
    <ul>
      {taskNode}
    </ul>


    
















    </div>
  )



};

export default App;
