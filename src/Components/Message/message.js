import React, { useEffect, useState } from 'react'
import messageStyle from './message.module.scss'
import bear from "../../Assets/teddy-bear1.png"

const colors = {
    bear_color: "#8a5013",
    active_color_type_1: "whitesmoke",
    active_color_type_2: "black"
}
const Message = ( {
                      customer_data
                  } ) => {

    const [ show_top_bear, change_position_bear_top ] = useState( false )
    const [ re_message, set_message_activity ] = useState( false )
    const [ show_bottom_bear, change_position_bear_bottom ] = useState( false )
    const [ bottom_bear_message, set_bottom_bear_message ] = useState( "Anything else" )


    useEffect( () => {
        if ( !!customer_data && !show_bottom_bear && !show_top_bear ) {
            setTimeout( () => {
                change_position_bear_bottom( true )
            }, 7000 )
        }
    }, [ customer_data, re_message ] )

    useEffect( () => {
        if ( show_bottom_bear && bottom_bear_message === "Anything else" ) {
            setTimeout( () => {
                set_bottom_bear_message( "Touch me" )
            }, 12000 )
        }
    }, [ show_bottom_bear ] )


    return <div className={ messageStyle.main }>
        <div
            className={ !!customer_data ? `${ messageStyle.loader } ${ messageStyle[ 'loader--active' ] }` : messageStyle.loader }>
            <div className={ messageStyle.loaded_page }>
                <div className={ messageStyle.message_container }>
                    <h1 className={ messageStyle.user_id }>ID: <span>{ customer_data?.id }</span></h1>
                    <h2 className={ messageStyle.user_info }>
                        Name: <span>{ customer_data?.user_name }</span>
                        Inst.: <span>{ customer_data?.inst }</span>
                    </h2>
                    {/*<h2 className={messageStyle.user_id}></h2>*/ }
                    <p className={ messageStyle.message }>
                        <span>
                            { customer_data?.message?.line_1 }
                        </span>
                    </p>
                    <p className={ messageStyle.message }>
                        <span>
                            { customer_data?.message?.line_2 }
                        </span>
                    </p>
                </div>
                <div
                    onClick={ () => {
                        change_position_bear_top( false )
                        set_message_activity( !re_message )
                    } }
                    className={
                        show_top_bear ? messageStyle.top_bear_block
                            : messageStyle.top_bear_block_hide
                    }
                >
                    <img src={ bear } alt="Bear"/>
                    <span>
                        You have a secret key,<br/>
                        Which is written on the back side of papers
                    </span>
                </div>
                <div
                    onClick={ () => {
                        change_position_bear_top( true )
                        change_position_bear_bottom( false )
                    } }
                    className={
                        show_bottom_bear ? messageStyle.bear_block
                            : messageStyle.bear_block_hide
                    }
                >
                    <img src={ bear } alt="Bear"/>
                    <span>{ bottom_bear_message }</span>
                </div>
            </div>
            <div className={ messageStyle.loader__tile }/>
            <div className={ messageStyle.loader__tile }/>
            <div className={ messageStyle.loader__tile }/>
            <div className={ messageStyle.loader__tile }/>
            <div className={ messageStyle.loader__tile }/>
        </div>

    </div>
}

export default Message