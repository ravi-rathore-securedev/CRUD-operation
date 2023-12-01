import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Update';


function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Routes>
      
        <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
          
      </Routes>
      </BrowserRouter>
    </div>
  )
    
}

export default App;
