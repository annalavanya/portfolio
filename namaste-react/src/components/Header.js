import { useState } from "react";
import { LOGO_URL } from "../utility/constants";
const HeaderComponent = () => {
    const [authButton, setAuthButton] = useState('LOGIN');
    return (
        <div className="heading">
            <div className="img-div">
                <img className="img" src={LOGO_URL} alt="Store Logo"/>
            </div>
            <div className="list">
                <ul className="ul-list">
                    <li className="li-style">Home</li>
                    <li className="li-style">About Us</li>
                    <li className="li-style">Contact Us</li>
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