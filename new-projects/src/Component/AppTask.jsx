import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AppTask() {
  const[forminpt,setforminpt]=useState({
    title:"",
    completed:true
  })
  const handleChange = (e) =>{
    const{name,value}=e.target
    setforminpt({...forminpt,[name]:value})
    console.log(forminpt)

  }
  const home =useNavigate()
  const handlesubmit= (e)=>{
    e.preventDefault()
    console.log(forminpt)
    axios.post('http://localhost:3006/todos',forminpt)
    .then(resp => {
      alert('Taks added successfuly !!')
      home('/')
    })
    .catch(err => console.error(err))
    
  }
  return (
    <div className='container'>
      <h1>Add task :</h1>
      <form onSubmit={handlesubmit}>

            <div className="mb-3">
              <label htmlFor="title">Title:</label><br />
              <input className='form-control' type="text" name="title" value={forminpt.title} onChange={handleChange} />
            </div>

            <div className="mb-3">
            <label htmlFor="completed">Completed:</label>
              <select className="form-select form-select-lg" name="completed" value={forminpt.completed} onChange={handleChange} >
                {/* <option selected>Select one</option> */}
                <option value={true}>True</option>
                <option value={false} >False</option>
              </select>
          </div>
          <div className='d-grid'><button type='submit' className='btn btn-success '>Add</button></div>
      </form>
    </div>
  )
}
