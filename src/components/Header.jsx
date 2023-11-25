import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus()

    return (
        <div className="flex justify-between shadow-lg ">
            <a href="/" className="w-44">
                <img
                    className=""
                    alt="logo"
                    src={LOGO_URL}></img>
            </a>
            <div className="flex nav-items items-center">
                <ul className="flex ">
                    <li className=" mx-2 px-2" >
                        <Link to="/">Online Status: {onlineStatus ? "✔" : "❌"}</Link>
                    </li>
                    <li className=" mx-2 px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" mx-2 px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className=" mx-2 px-2">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className=" mx-2 px-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className=" mx-2 px-2">Cart</li>
                    <button className=" mx-2 px-2" onClick={() => {
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