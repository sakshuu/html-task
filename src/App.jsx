import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Page404 } from './pages'
import { MyNavbar } from './components'


const App = () => {
  return <>
  <MyNavbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="*" element={<Page404/>}/>
  </Routes>
  </>
}

export default App