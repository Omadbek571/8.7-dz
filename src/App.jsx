import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyLayout from './layout/MyLayout'
import Two from './pages/Two'
import Three from './pages/Three'
import Four from './pages/Four'
import Five from './pages/Five'

function App() {
  return (
    <div>
      <MyLayout></MyLayout>
      <div className='container flex flex-col bg-blue-100 rounded-md p-2 mx-auto'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/two' element={<Two></Two>}></Route>
          <Route path='/three' element={<Three></Three>}></Route>
          <Route path='/four' element={<Four></Four>}></Route>
          <Route path='/five' element={<Five></Five>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App