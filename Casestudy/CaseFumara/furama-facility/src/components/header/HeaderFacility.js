import "./Header.css";
import {useNavigate} from "react-router-dom";
export default function HeaderFacility() {
    const navigate = useNavigate();

    return(
        <div id="header" className="color3">
            <div id="logo"></div>
            <div></div>
            <div id="facilityDiv" className="color2"
                 onClick={() => navigate("/")}>Facility</div>
            <div id="employeeDiv" className="hover"
                 onClick={() => navigate("/employee")}>Employee</div>
            <div id="customerDiv" className="hover"
                 onClick={() => navigate("/customer")}>Customer</div>
            <div id="contractDiv" className="hover"
                 onClick={() => navigate("/contract")}>Contract</div>
        </div>
    )
}