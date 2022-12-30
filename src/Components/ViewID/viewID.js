import React, { useRef, useState } from 'react'
import viewIDStyles from './viewID.module.scss'
import { useDispatch } from "react-redux";
import { send_customer_id } from "../../Redux/Actions/common.actions";
import bear from "../../Assets/teddy-bear1.png"

const colors = {
    bear_color: "#8a5013",
    active_color_type_1: "whitesmoke",
    active_color_type_2: "black"
}

const ViewID = ( { is_touched } ) => {
    const dispatch = useDispatch()
    const user_id_ref = useRef( 0 )
    const [ is_active, set_activity ] = useState( false )
    const [ show_bear_r, change_poss_bear_r ] = useState( false )
    const [ show_bear_l, change_poss_bear_l ] = useState( false )
    const handler_id = ( id ) => {
        console.log( id )
        dispatch( send_customer_id( id ) )
    }
    return <div className={ viewIDStyles.main }>
        <div
            className={ is_touched ? `${ viewIDStyles.loader } ${ viewIDStyles[ 'loader--active' ] }` : viewIDStyles.loader }>
            <div className={ viewIDStyles.loaded_page }>
                <div
                    onClick={() => change_poss_bear_l(true)}
                    className={ `${ viewIDStyles.logo_block } ${ viewIDStyles.block }` }>
                    <h1><span>🧸</span>Bear & Balloons<span>🎈</span></h1>
                </div>
                <div className={ `${ viewIDStyles.middle_block } ${ viewIDStyles.block }` }>
                    <div className={ viewIDStyles.bear_left }>
                        <div
                            className={
                                show_bear_l ? viewIDStyles.bear_image_container_l
                                    :`${viewIDStyles.bear_image_container_l} ${viewIDStyles.hide_bear_l}`
                            }
                        >
                            <div
                                onClick={() => change_poss_bear_l(!show_bear_l)}
                                className={ viewIDStyles.message_l }>
                                <span>
                                    Write your id<br/>
                                    Which is written on one
                                    of the pieces of paper.
                                </span>
                            </div>
                            <img src={ bear } alt="Bear"/>
                        </div>
                    </div>
                    <div className={ viewIDStyles.input_block }>
                        <div
                            className={ viewIDStyles.input_container }
                            style={ {
                                borderColor: is_active ? colors.active_color_type_1 : colors.bear_color
                            } }
                        >
                            <label
                                className={
                                    is_active ? viewIDStyles.active : null
                                }
                                htmlFor="ID"
                            >ID ex. 123456789</label>
                            <input id="ID" type="text"
                                   onKeyPress={ ( e ) => {
                                       if ( e.key === "Enter" && user_id_ref.current ) {
                                           handler_id( user_id_ref.current )
                                       }
                                   } }
                                   onChange={ ( e ) => {
                                       if ( e.target.value ) {
                                           set_activity( true )
                                           user_id_ref.current = e.target.value
                                       } else {
                                           set_activity( false )
                                       }
                                   } }/>
                            <div className={ viewIDStyles.search_icon }>
                                <i
                                    style={ {
                                        color: is_active ? colors.active_color_type_2 : colors.bear_color
                                    } }
                                    onClick={ () => {
                                        // if ( user_id_ref.current ) {
                                        //     handler_id( user_id_ref.current )
                                        // }
                                        change_poss_bear_r(true)
                                    } }
                                    className="bi bi-search"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={ viewIDStyles.bear_right }>
                        <div
                            className={
                                show_bear_r ? viewIDStyles.bear_image_container_r
                                    :`${viewIDStyles.bear_image_container_r} ${viewIDStyles.hide_bear_r}`
                            }
                        >
                            <div
                                onClick={() => change_poss_bear_r(!show_bear_r)}
                                className={ viewIDStyles.message_r }>
                                <span>
                                    You have a secret key,<br/>
                                Which is written on pieces of paper
                                </span>
                            </div>
                            <img src={ bear } alt="Bear"/>
                        </div>
                    </div>
                </div>
                <div className={ `${ viewIDStyles.under_block } ${ viewIDStyles.block }` }>

                </div>
            </div>
            <div className={ viewIDStyles.loader__tile }/>
            <div className={ viewIDStyles.loader__tile }/>
            <div className={ viewIDStyles.loader__tile }/>
            <div className={ viewIDStyles.loader__tile }/>
            <div className={ viewIDStyles.loader__tile }/>
        </div>
    </div>
}

export default ViewID