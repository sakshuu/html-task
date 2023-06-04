import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Page404 } from './pages'
import { MyNavbar } from './components'


const App = () => {
  return <>
  <Routes>
  <Route path="/" element={<MyNavbar/>}>
  <Route  index element={<Home/>}/>
  <Route path="*" element={<Page404/>}/>
  </Route>
  </Routes>
  </>
}

export default App