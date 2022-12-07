import './App.css';
import Login from  "./components/Login"
import Home from "./components/Home"
import {Route, Routes,BrowserRouter} from 'react-router-dom'


const App = () => {
    return(
    <BrowserRouter>
       <Routes>
       <Route  path="/login" element={<Login />} />
            <Route  path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    )
     
  
  }


export default App;
