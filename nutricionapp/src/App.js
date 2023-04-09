import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./layouts/Main.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Main/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
