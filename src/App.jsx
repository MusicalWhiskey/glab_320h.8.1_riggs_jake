import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'

import './App.css'
import Nav from './components/nav'

function App() {
  
  return (
    <>
    <Nav />
     <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </>
  )
}

export default App
