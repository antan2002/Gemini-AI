import React, { useState } from 'react';
import './Setting.css'
import Theme from '../DarkMode/Theme';
const Setting = ({ dark }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="dropup">
                <button onClick={toggleDropdown} className='btn-set'>Setting</button>
                {isOpen && (
                    <div className="dropdown-content">
                        <p>SignUp</p>
                        <p>SignOut</p>
                        <Theme changeToggel={dark}></Theme>
                    </div>
                )}
            </div>
        </>
    )
}
export default Setting;