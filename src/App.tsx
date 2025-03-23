import './App.css'
import {  Routes, Route } from "react-router-dom";
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
     
    </>
  )
}

export default App
