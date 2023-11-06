import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTask() {
    const[editform,seteditform]=useState({
        title:"",
        completed:''
    })
    const {id}=useParams()
    useEffect(()=>{
        axios.get('http://localhost:3006/todos/'+id)
        .then(response => seteditform(response.data))
        .catch(err => console.error(err))
    },[])
    const handleChange = (e) =>{
        const{name,value}=e.target
        seteditform({...editform,[name]:value})
        console.log(editform)
    
      }

      const home = useNavigate()
      const handleedit= (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:3006/todos/${id}`,editform)
        .then(respo => {
            alert("task updated")
            home('/')
        })
        .catch(err => console.error(err))

      }
  return (
    <div className='container'>
      <h1>Edit task :</h1>
      <form onSubmit={handleedit}>

            <div className="mb-3">
              <label htmlFor="title">Title:</label><br />
              <input className='form-control' type="text" name="title" value={editform.title} onChange={handleChange} />
            </div>

            <div className="mb-3">
            <label htmlFor="completed">Completed:</label>
              <select className="form-select form-select-lg" name="completed" value={editform.completed} onChange={handleChange} >
                <option selected>Select one</option>
                <option value={true}>True</option>
                <option value={false} >False</option>
              </select>
          </div>
          <div className='d-grid'><button type='submit' className='btn btn-success '>Add</button></div>
      </form>
    </div>
  )
}
