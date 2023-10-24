import './App.css';
import {Route, Routes} from "react-router-dom";
import Facility from "./components/facility/display/Facility";
import Employee from "./components/employee/display/Employee";
import Customer from "./components/customer/display/Customer";
import CustomerCreate from "./components/customer/create/CustomerCreate";
import EmployeeCreate from "./components/employee/create/EmployeeCreate";
import FacilityCreate from "./components/facility/create/FacilityCreate";
import EmployeeEdit from "./components/employee/edit/EmployeeEdit";
import CustomerEdit from "./components/customer/edit/CustomerEdit";
import HeaderFacility from "./components/header/HeaderFacility";
import HeaderCustomer from "./components/header/HeaderCustomer";
import HeaderEmployee from "./components/header/HeaderEmployee";
import HeaderContract from "./components/header/HeaderContract";
import Contract from "./components/contract/display/Contract";
import ContractEdit from "./components/contract/edit/ContractEdit";
import ContractCreate from "./components/contract/create/ContractCreate";

function App() {
  return (
          <div id="body" className="color2">
              <Routes>
                  <Route path="/" element={<HeaderFacility/>}/>
                  <Route path="/buiding/*" element={<HeaderFacility/>}/>
                  <Route path="/employee/*" element={<HeaderEmployee/>}/>
                  <Route path="/customer/*" element={<HeaderCustomer/>}/>
                  <Route path="/contract/*" element={<HeaderContract/>}/>
              </Routes>
              <Routes>
                  <Route path="/" element={<Facility/>}/>
                  <Route path="/employee" element={<Employee/>}/>
                  <Route path="/customer" element={<Customer/>}/>
                  <Route path="/contract" element={<Contract/>}/>
                  <Route path="/employee/edit/:id" element={<EmployeeEdit/>}/>
                  <Route path="/customer/edit/:id" element={<CustomerEdit/>}/>
                  <Route path="/contract/edit/:id" element={<ContractEdit/>}/>
                  <Route path="/customer/create" element={<CustomerCreate/>}/>
                  <Route path="/employee/create" element={<EmployeeCreate/>}/>
                  <Route path="/buiding/create" element={<FacilityCreate/>}/>
                  <Route path="/contract/create" element={<ContractCreate/>}/>
              </Routes>
          </div>
  );
}

export default App;
