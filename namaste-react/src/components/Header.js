import { useEffect, useState } from "react";
import { LOGO_URL } from "../utility/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const HeaderComponent = () => {
    const [authButton, setAuthButton] = useState('LOGIN');

    console.log("component called");

    useEffect(() => {
        console.log("useEffect called");
    },[]);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="heading">
            <div className="img-div">
                <img className="img" src={LOGO_URL} alt="Store Logo"/>
            </div>
            <div className="list">
                <ul className="ul-list">
                    <li className="li-style"><Link to='/grocery' style={{ textDecoration: 'none' }}>Grocery</Link></li>
                    <li className="li-style">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="li-style"><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li className="li-style"><Link to='/about' style={{ textDecoration: 'none' }}>About Us</Link></li>
                    <li className="li-style"><Link to='/contact' style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                    <li className="li-style">Cart</li>
                    <li className="li-style">
                        <button className="authButton" onClick={
                            ()=>{
                                authButton === 'LOGIN' ? setAuthButton('LOGOUT') : setAuthButton('LOGIN');
                            }
                        }>
                            {authButton}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;