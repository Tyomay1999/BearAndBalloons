import React, { useRef, useState } from 'react'
import viewIDStyles from './viewID.module.scss'
import { useDispatch } from "react-redux";
import { send_customer_id } from "../../Redux/Actions/common.actions";

const ViewID = ( { is_touched } ) => {
    const dispatch = useDispatch()
    const user_id_ref = useRef( 0 )
    const [ is_active, set_activity ] = useState( false )
    const handler_id = ( id ) => {
        console.log( id )
        dispatch( send_customer_id( id ) )
    }
    return <div className={ viewIDStyles.main }>
        <div
            className={ is_touched ? `${ viewIDStyles.loader } ${ viewIDStyles[ 'loader--active' ] }` : viewIDStyles.loader }>
            <div className={ viewIDStyles.loaded_page }>
                <div className={ `${ viewIDStyles.logo_block } ${ viewIDStyles.block }` }>
                    <h1>🧸Bear And Balloons🎈</h1>
                </div>
                <div className={ `${ viewIDStyles.middle_block } ${ viewIDStyles.block }` }>
                    <div className={ viewIDStyles.bear_left }></div>
                    <div className={ viewIDStyles.input_block }>
                        <div
                            className={ viewIDStyles.input_container }
                            style={{
                                borderColor: is_active ? "red" : "black"
                            }}
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
                                    style={{
                                        color: is_active ? "red" : "black"
                                    }}
                                    onClick={ () => {
                                        if ( user_id_ref.current ) {
                                            handler_id( user_id_ref.current )
                                        }
                                    }}
                                    className="bi bi-search"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={ viewIDStyles.bear_right }>

                    </div>
                </div>
                <div className={ `${ viewIDStyles.under_block } ${ viewIDStyles.block }` } />
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