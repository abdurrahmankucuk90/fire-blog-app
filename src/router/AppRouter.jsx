import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'

const AppRouter = () => {
  return (
   
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
        </Routes>

    </div>
  )
}

export default AppRouter