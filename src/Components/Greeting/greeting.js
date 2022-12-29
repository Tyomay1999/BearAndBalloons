import React, {useState} from 'react'
import greetingStyle from './greeting.module.scss'
// import { useDispatch, useSelector } from "react-redux";
// import { change_loading } from "../../Redux/Actions/common.actions";
import bear from "../../Assets/teddy-bear1.png"
import ViewID from "../ViewID/viewID";

const Greeting = () => {
    // const dispatch = useDispatch()
    // const delta = process.env.REACT_APP_SERVER_URL
    // const common = useSelector(state => state.commonReducer)
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
    </div>
}

export default Greeting