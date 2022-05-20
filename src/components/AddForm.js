import React from 'react';
import {useState} from 'react';

function AddForm({addTask}){
  const[text,setText]=useState('')
  const[time,setTime]=useState('')
  const[reminder,setReminder]=useState(false)

  const onSubmit=(e)=>{
    e.preventDefault();
    if(!text) {alert('Invalid form.'); return;}
    addTask({text,time,reminder})
    setText('');
    setTime('');
    setReminder(false);
  }

  return (
      <form className='jumbotron card bg-dark' style={{padding:'10px',color:'white'}} onSubmit={onSubmit}>
          <h1 className='heading'>Create new Task</h1>
          <div className='container form-group border border-danger'>

            <label htmlFor='Name'>Task Name:</label>
            <input type='text' className='form-control' placeholder='Enter Task'
            value={text} onChange={(e)=>(setText(e.target.value))}/>
            <br/>
            <label>Date and Time:</label>
            <input type='text' className='form-control' placeholder='Enter Date and Time'
            value={time} onChange={(e)=>(setTime(e.target.value))}/>
            <br/>
            <label style={{paddingRight:'10px'}}>Set Reminder:</label>
            <input type='checkbox'
            checked={reminder} value={reminder} onChange={(e)=>(setReminder(e.currentTarget.checked))}/>

          </div>
            <input value='Submit' className='btn btn-danger' type='submit'/>
          {/* <br/> */}
      </form>
  );
};

export default AddForm;
