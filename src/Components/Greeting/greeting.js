import React, { useEffect } from 'react'
import greetingStyle from './greeting.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { change_loading } from "../../Redux/Actions/common.actions";
import bear from "../../Assets/bear.png"
const Greeting = () => {
    const dispatch = useDispatch()
    const delta = process.env.REACT_APP_SERVER_URL
    const common = useSelector(state => state.commonReducer)
    console.log(common, "<---------------->",delta)
    useEffect(() => {
        dispatch(change_loading(true))
    },[dispatch])
    // return <div className={ greetingStyle.main }>
    //     🧸Bear and Balloons🎈
    // </div>
    return <div className={greetingStyle.main}>
        <div className={greetingStyle.left_block} />
        <div className={greetingStyle.right_block}>
            <div className={greetingStyle.bear}>
                <img src={ bear } alt="bear"/>
                <div className={greetingStyle.info_message}>
                    <span />
                    <div>
                        <p>Touch me</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Greeting