import React, { useEffect, useState } from 'react'
import greetingStyle from './greeting.module.scss'
// import bear from "../../Assets/teddy-bear1.png"
// import balloon from "../../Assets/balloon.gif"
// import ViewID from "../ViewID/viewID";
// import Message from "../Message/message";
// import { useDispatch, useSelector } from "react-redux";
// import { send_customer_id } from "../../Redux/Actions/common.actions";

const Greeting = () => {
    // const dispatch = useDispatch()
    // const common = useSelector(state => state.commonReducer)
    const [is_start, setState] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setState(false)
        }, 7000)
    },[])
        // return <div onClick={() => {
        // dispatch(send_customer_id())
        // }
        // } className={greetingStyle.secret}>
        //     <div className={greetingStyle.bear_container}>
        //         <div className={greetingStyle.image_block}>
        //             <img src={balloon} alt="balloon" />
        //             <img src={bear} alt="bear" />
        //         </div>
        //         <h1>ME</h1>
        //     </div>
        // </div>
    return <div className={greetingStyle.main}>
            <svg viewBox="0 0 1320 300">
                <text className={is_start? greetingStyle.text_1 : greetingStyle.text_2} x="50%" y="50%" dy=".35em" textAnchor="middle">
                    8.1&2
                </text>
            </svg>
    </div>
}

export default Greeting