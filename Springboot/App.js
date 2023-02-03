
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div className="App text-center">
        <Router>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/employees'} element={<EmployeeList/>}/>
                <Route path={'/update'} element={<UpdateEmployee/>}/>
            </Routes>
        </Router>

    </div>
  );
}
export default App;
