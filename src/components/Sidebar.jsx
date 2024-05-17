import React, { useContext, useState } from "react";
import "./Sidebar.css"
import { assets } from '../assets/assets'
import { Context } from "../context/Context";
import Setting from "./Settings/Setting";
const Sidebar = () => {

    const [wrap, setWrap] = useState(false)
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context)

    const handleMenuClicked = () => {
        setWrap(prev => !prev);
    }

    const loadPrompt = async (data) => {
        setRecentPrompt(data)
        await onSent(data)
    }

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        console.log("change")
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (

        <div className=" sidebar">
            <div className=" top">
                <img className="menu" src={assets.menu_icon} alt="" onClick={handleMenuClicked} />
                <div onClick={() => newChat()} className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {wrap ? <p>New Chat</p> : null}

                </div>
                {wrap ? <div className="recent">
                    <p className=" recent-title">Recent</p>
                    {prevPrompt.map((item) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0, 15)}....</p>
                            </div>
                        )
                    })}

                </div>
                    : null
                }

            </div>
            <div className="buttom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {wrap ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {wrap ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {wrap ? <Setting
                        dark={toggleTheme} >
                    </Setting> : null}
                </div>
            </div>
        </div >
    )
}
export default Sidebar;