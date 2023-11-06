// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

import axios from "axios"
import { Link } from "react-router-dom"

export default function Task  ({task}){
  
  const handleDeltet = (id)=>{
    console.log(id)
    axios.delete('http://localhost:3006/todos/'+id)
    .then(resp => {
      alert("Task deleted")
      window.location.reload()
    })
    .catch(err => console.error(err))
  }
  return (
    <div>
      {task.map((hp)=>{
        return <div key={hp.id}>
          <div className='d-flex '>
            <p  className='my-3'>
              <b>Title: {hp.title}</b> |
              <b> {`Complete: ${hp.completed}`}</b> |
              </p>
             <div className="d-block my-3 ">
             <button className='btn btn-sm' onClick={()=>{handleDeltet(hp.id)}} >Delete</button>
              <Link to={`/editTask/${hp.id}`}><button className="btn btn-sm " >Edit</button></Link>
             </div>
          </div>
          <hr />
        </div>
      })}
    </div>
  )
}
