import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
  return (

    <div style={{textAlign:'center'}}>
        <div style={{borderColor:'black',borderStyle:'double', borderWidth:'5%'}}>
            <h2> 7330 7321 7335</h2>
            <h4>Version 1.0</h4>
        </div>
        
        <div>
            <Link to='/'>Go back</Link>
        </div>
    </div>
  );
};

export default About;
