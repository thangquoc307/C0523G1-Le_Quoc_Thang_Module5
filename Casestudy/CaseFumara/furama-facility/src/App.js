import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Facility from "./components/facility/Facility";
import Create from "./components/create/Create";
import Employee from "./components/employee/display/Employee";
import Customer from "./components/customer/display/Customer";
import CustomerCreate from "./components/customer/create/CustomerCreate";
import EmployeeCreate from "./components/employee/create/EmployeeCreate";

function App() {
  return (
      <div id="body" className="color2">
        <Header/>
          <Routes>
              <Route path="/" element={<Facility/>}/>
              <Route path="/employee" element={<Employee/>}/>
              <Route path="/customer" element={<Customer/>}/>


              <Route path="/customer/create" element={<CustomerCreate/>}/>
              <Route path="/employee/create" element={<EmployeeCreate/>}/>

              <Route path="/create" element={<Create/>}/>

          </Routes>
      </div>
  );
}

export default App;
