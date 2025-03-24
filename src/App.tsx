import './App.css'
import {  Routes, Route } from "react-router-dom";
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
     
    </>
  )
}

export default App
