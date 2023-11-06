import React, { useState } from 'react'
import Task from './Task'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AppTask() {
  const[task,settask]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3006/todos');
        settask(response.data);
        console.log(task)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
        <div className='container'>
            <h1>Tasks List</h1>
            <Link to='/addTask'><button className='btn btn-success'>Add Task</button></Link>
            <hr />
        </div>
        <div className='container'>
          <Task task={task}/>
        </div>
    </div>
  )
}
