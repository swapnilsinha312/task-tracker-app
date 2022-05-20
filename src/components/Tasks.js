import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({tasks,deleteTask, onDoubleClick}) =>{
    
    return (
  <div className='container'>
    {tasks.map((task,index)=>
    (
      <Task 
      onDoubleClick={onDoubleClick} 
      deleteTask={deleteTask} 
      key={index} 
      task={task}/>))
      }
  </div>
  );
};

Tasks.propTypes = {
    tasks:PropTypes.array
};

export default Tasks;
