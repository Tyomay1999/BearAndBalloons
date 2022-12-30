import React from 'react'
import messageStyle from './message.module.scss'

const colors = {
    bear_color: "#8a5013",
    active_color_type_1: "whitesmoke",
    active_color_type_2: "black"
}
const Message = ( {
                      customer_data
                  } ) => {

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
                    <p className={ messageStyle.user_id }>Message: <span>
                        { customer_data?.message }<br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Beatae cum esse eveniet illo inventore sequi sint!  <br />
                        At aut beatae cum error eum, excepturi inventore officia <br />
                        perspiciatis quam recusandae repudiandae vel?
                    </span></p>
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