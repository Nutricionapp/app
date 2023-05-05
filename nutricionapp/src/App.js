import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./layouts/Main.js";
import AllergiesComorbidities from "./layouts/Allergies-Comorbidities.js";
import Goal from "./layouts/Goal.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Main/>}/>
         <Route path='/allergies-comorbidities' element={<AllergiesComorbidities/>}/>
         <Route path='/select-goal' element={<Goal/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
