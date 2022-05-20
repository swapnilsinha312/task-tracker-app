import React from 'react';
import PropTypes from 'prop-types';

function Task({task, deleteTask, onDoubleClick}){
// console.log(task._id);
  return (
    <div className="card" onDoubleClick={()=>onDoubleClick(task)} >
        <div className="card-body" style={{borderWidth:'8px',borderLeftStyle:'double',borderTopStyle:'double', borderColor:`${task.reminder?'red':'green'}`}}>
            {/* <h5 className="card-title">{task._id}{'Task'}</h5> */}
            <h5 className="card-title">{task.text}</h5>
            <p className="card-text">{task.time}
                <a style={{float:'right'}} href="#" className="btn btn-primary" onClick={()=>deleteTask(task)}>Done</a>
            </p>
        </div>
    </div>
  );
};

Task.propTypes = {};

export default Task;
