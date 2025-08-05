import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utility/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

// context
import UserContext from "../utility/UserContext";

const HeaderComponent = () => {
    const [authButton, setAuthButton] = useState('LOGIN');

    console.log("component called");

    useEffect(() => {
        console.log("useEffect called");
    },[]);

    const onlineStatus = useOnlineStatus();



    const { user } = useContext(UserContext);
    console.log(user);



    return (
        <div className="flex bg-gray-800 h-30 justify-between shadow-2xl">
            <div className="w-25 m-3">
                <img className="" src={LOGO_URL} alt="Store Logo"/>
            </div>
            <div className="m-8">
                <ul className="flex ">
                    <li className="text-blue-50 m-4  hover:text-red-500"><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li className="text-blue-50 m-4  hover:text-red-500"><Link to='/about' style={{ textDecoration: 'none' }}>About Us</Link></li>
                    <li className="text-blue-50 m-4  hover:text-red-500"><Link to='/contact' style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                    <li className="text-blue-50 m-4  hover:text-red-500">Cart</li>
                    <li className="text-blue-50 m-4  hover:text-red-500"><Link to='/grocery' style={{ textDecoration: 'none' }}>Grocery</Link></li>
                    <li className="text-blue-50 m-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="m-4 text-blue-50 hover:text-red-500">
                        <button className="cursor-pointer" onClick={
                            ()=>{
                                authButton === 'LOGIN' ? setAuthButton('LOGOUT') : setAuthButton('LOGIN');
                            }
                        }>
                            {authButton}
                        </button>
                    </li>
                    <li className="text-blue-50 m-4 font-bold">{user}</li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;