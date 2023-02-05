import React, { useState } from 'react'
import greetingStyle from './greeting.module.scss'
import bear from "../../Assets/teddy-bear1.png"
import balloon from "../../Assets/balloon.gif"
import ViewID from "../ViewID/viewID";
import Message from "../Message/message";
import { useDispatch, useSelector } from "react-redux";
import { send_customer_id } from "../../Redux/Actions/common.actions";

const Greeting = () => {
    const dispatch = useDispatch()
    const common = useSelector(state => state.commonReducer)

        return <div onClick={() => {
        dispatch(send_customer_id())
        }
        } className={greetingStyle.secret}>
            <div className={greetingStyle.bear_container}>
                <div className={greetingStyle.image_block}>
                    <img src={balloon} alt="balloon" />
                    <img src={bear} alt="bear" />
                </div>
                <h1>ME</h1>
            </div>
        </div>
}

export default Greeting