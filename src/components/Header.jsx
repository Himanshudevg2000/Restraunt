import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus()

    return (
        <div className="header">
            <a href="/">
                <img
                    className="img-header"
                    alt="logo"
                    src={LOGO_URL}></img>
            </a>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Online Status: {onlineStatus ? "✔" : "❌"}</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login"
                            ? setBtnName("Logout")
                            : setBtnName("Login")
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;