import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Weather from './pages/Weather'
import Register from './pages/Register'
import Menu from './components/Menu/Menu'
import Contact from './pages/Contact/Index'


function App() {
  return (
    <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/About'  element={<About/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/Weather' element={<Weather/>} />
        <Route exact path='/Register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
