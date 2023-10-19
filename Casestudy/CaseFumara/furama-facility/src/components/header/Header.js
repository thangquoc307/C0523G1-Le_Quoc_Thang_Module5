import "./Header.css";
import {useNavigate} from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    const locationHref = (link) => {
        navigate(link);
    }
    return(
        <div id="header" className="color3">
            <div id="logo" onClick={() => locationHref("/")}></div>
            <div></div>
            <div className="hover" onClick={() => locationHref("/facility")}>Facility</div>
            <div className="hover" onClick={() => locationHref("/employee")}>Employee</div>
            <div className="hover" onClick={() => locationHref("/customer")}>Customer</div>
            <div className="hover" onClick={() => locationHref("/contract")}>Contract</div>
        </div>
    )

}