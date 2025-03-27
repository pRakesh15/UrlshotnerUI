import './App.css'
import {  Routes, Route } from "react-router-dom";
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import UrlAnalyticsDashboard from './Components/Pages/UrlAnalyticsDashboard';
import ProtectedRoute from './ProtectedRoute';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoute/>}>
      <Route path='/dashBoard' element={<UrlAnalyticsDashboard/>}/>
      </Route>
    </Routes>
     
    </>
  )
}

export default App
