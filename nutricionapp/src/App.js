// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./layouts/Login.js";
import Register from "./layouts/Register.js";
import Main from "./layouts/Main.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Main/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='register' element={<Register/>}/> 
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
