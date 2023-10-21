import "./Header.css";
import {useNavigate} from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    const locationHref = (num) => {
        let facilityDiv = document.getElementById("facilityDiv");
        let employeeDiv = document.getElementById("employeeDiv");
        let customerDiv = document.getElementById("customerDiv");
        let contractDiv = document.getElementById("contractDiv");
        switch (num){

            case 2:
                navigate("/employee");
                facilityDiv.className = "hover";
                employeeDiv.className = "color2";
                customerDiv.className = "hover";
                contractDiv.className = "hover";
                break;
            case 3:
                navigate("/customer");
                facilityDiv.className = "hover";
                employeeDiv.className = "hover";
                customerDiv.className = "color2";
                contractDiv.className = "hover";
                break;
            case 4:
                navigate("/contract");
                facilityDiv.className = "hover";
                employeeDiv.className = "hover";
                customerDiv.className = "hover";
                contractDiv.className = "color2";
                break;
            default:
                navigate("/");
                facilityDiv.className = "color2";
                employeeDiv.className = "hover";
                customerDiv.className = "hover";
                contractDiv.className = "hover";
                break;
        }
    }
    return(
        <div id="header" className="color3">
            <div id="logo"></div>
            <div></div>
            <div id="facilityDiv" className="color2"
                 onClick={() => locationHref(1)}>Facility</div>
            <div id="employeeDiv" className="hover"
                 onClick={() => locationHref(2)}>Employee</div>
            <div id="customerDiv" className="hover"
                 onClick={() => locationHref(3)}>Customer</div>
            <div id="contractDiv" className="hover"
                 onClick={() => locationHref(4)}>Contract</div>
        </div>
    )

}