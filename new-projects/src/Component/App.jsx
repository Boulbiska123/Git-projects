import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import TaskList from './TaskList'
import AppTask from './AppTask'
import EditTask from './EditTask'

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' index  element={<TaskList/>}/>
            <Route  path='/addTask'  element={<AppTask/>}/>
            <Route  path='/editTask/:id'  element={<EditTask/>}/>

          </Routes>
        </BrowserRouter>
    </>
  )
}
