import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.js' 
import Footer from './components/Footer';
import About from './components/About';
import AddForm from './components/AddForm';
import Tasks from './components/Tasks';
import { useState,useEffect } from 'react';

function App() {
  
  const [showForm,setShowForm]= useState(false)
  const [tasks,setTasks]=useState([])

  // Getting data from server
  const fetchTasks= async()=>{
    const res=await(fetch('http://localhost:8080/tasks'))
    const data=await res.json()
    // console.log(data);
    return data;
  }

  useEffect(()=>{
    const getTasks=async()=>{
      const tasksFromJson= await fetchTasks()
      setTasks(tasksFromJson)
    }
    getTasks();
  },[])
  // ******
  
  const addTask=async (task)=>{
   const req=await fetch('http://localhost:8080/tasks',
   {
     method:'POST',
     headers:{'Content-type':'application/json'},
     body:JSON.stringify(task)
   })
   
   const newData=await req.json();
   setTasks([...tasks,newData]);
    // setTask();
    // console.log(task);
    // const id=(Math.random()*1000)+1;
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
    setShowForm(false);
  }

  const deleteTask=async (task)=>{
    // console.log(id);
    await fetch(`http://localhost:8080/tasks/${task._id}`,
    {
      method:'Delete'
    })
    // setTasks(tasks.filter((task)=>(task.id!==id)))
    setTasks(tasks.filter((t)=>(t._id!==task._id)))
  }
   
  const dispForm = () =>{
    setShowForm(!showForm);
  }

  const fetchTask= async(id)=>{
    // console.log(id);
    const req=await(fetch(`http://localhost:8080/tasks/${id}`))
    const data=await req.json()
    // console.log(data);
    return data;
  }

  const changeReminder=async (task)=>{
    // console.log(id);
    console.log("Double Click");
    // const task= await fetchTask(id);
    const newTask={...task,reminder:!task.reminder}
    const req=await fetch(
      // `http://localhost:8080/tasks/${id}`,{
        `http://localhost:8080/tasks/${task._id}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(newTask)
      }
    )
    const data= await req.json();
    
    setTasks(tasks.map((t) => 
    (t._id===task._id?
      // (task.id===id?
      { ...t,reminder:!t.reminder}
      :t)));
  }

  
  return (
    <BrowserRouter>
      <div className="container">
        <Header showForm={showForm} onClick={dispForm}/>
        
          <Route path='/' exact render={(props)=>(
            <>
            {showForm?
            <AddForm addTask={addTask}/>:''}
            {tasks.length>0?
            <Tasks tasks={tasks} onDoubleClick={changeReminder} deleteTask={deleteTask}/>
            :'No tasks'}
            </>
            )}/>
          <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
