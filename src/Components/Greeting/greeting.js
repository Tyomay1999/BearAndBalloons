import React, { useEffect, useState } from 'react'
import greetingStyle from './greeting.module.scss'
import Modal from "../Modal/modal";
import { get_large_image, get_large_immage } from "../../Redux/Actions/common.actions";
import { useDispatch } from "react-redux";
// import bear from "../../Assets/teddy-bear1.png"
// import balloon from "../../Assets/balloon.gif"
// import ViewID from "../ViewID/viewID";
// import Message from "../Message/message";
// import { useDispatch, useSelector } from "react-redux";
// import { send_customer_id } from "../../Redux/Actions/common.actions";

// token -> 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
const Greeting = () => {
    const dispatch = useDispatch()
    // const common = useSelector(state => state.commonReducer)
    const [ is_start, setState ] = useState( false )

    useEffect(() => {
        dispatch(get_large_image())
        setTimeout(() => {
            setState(true)
        }, 3900)
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

    return <div className={ greetingStyle.main }>
        {
            !is_start ? <svg viewBox="0 0 1320 300">
                <text
                    className={ greetingStyle.text_1 } x="50%" y="50%" dy=".35em"
                    textAnchor="middle">
                    8.1&2
                </text>
            </svg> : <></>
        }

        {
            is_start ? <Modal /> : <></>
        }
    </div>
}

export default Greeting