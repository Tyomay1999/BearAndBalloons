import React, { useState } from 'react'
import greetingStyle from './greeting.module.scss'
import bear from "../../Assets/teddy-bear1.png"
import ViewID from "../ViewID/viewID";
import Message from "../Message/message";
import { useSelector } from "react-redux";

const Greeting = () => {
    // const dispatch = useDispatch()
    // const delta = process.env.REACT_APP_SERVER_URL
    const common = useSelector(state => state.commonReducer)
    const [is_touched, touch] = useState(false)
    return <div className={greetingStyle.main}>
        <div className={greetingStyle.right_block}>
            <div className={greetingStyle.bear}>
                <div onClick={() => touch(true)}>
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
        <ViewID is_touched={is_touched} />
        <Message customer_data={common.customer_data} />
    </div>
}

export default Greeting