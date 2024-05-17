import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";

const Main = ({ name }) => {
    const { onSent, recentPrompt, result, loading, resultData, setInput, input } = useContext(Context)


    return (
        <div className="main">
            <div className="nav">
                <p data-bs-toggle="dropdown">
                    Geimini AI
                </p>
                <img src={assets.user_icon} slt=""></img>
            </div>
            <div className="main-container">

                {!result
                    ? <>
                        <div className="greet">
                            <p><span>Hello,{name}Antan</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Find hotels in Recoleta in Buenos Aires, and things to do</p>
                                <img src={assets.bulb_icon} alt=""></img>
                            </div>
                            <div className="card">
                                <p>Give me tips for how to grow my YouTube channe</p>
                                <img src={assets.compass_icon} alt=""></img>
                            </div>
                            <div className="card">
                                <p>What's the reaction to and impact of autonomous vehicles</p>
                                <img src={assets.bulb_icon} alt=""></img>
                            </div>
                            <div className="card">
                                <p>Suggest beaches to visit in a city, including details</p>
                                <img src={assets.message_icon} alt=""></img>
                            </div>
                        </div>
                    </>
                    : <div className="results">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="searchBox">
                        <input onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter a prompt here"></input>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img
                                onClick={() => onSent()}
                                src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main;