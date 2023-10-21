import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Facility from "./components/facility/Facility";
import Create from "./components/create/Create";
import Employee from "./components/employee/Employee";
import Customer from "./components/customer/Customer";

function App() {
  return (
      <div id="body" className="color2">
        <Header/>
          <Routes>
              <Route path="/" element={<Facility/>}/>
              <Route path="/employee" element={<Employee/>}/>
              <Route path="/customer" element={<Customer/>}/>


              <Route path="/create" element={<Create/>}/>

          </Routes>
      </div>
  );
}

export default App;
