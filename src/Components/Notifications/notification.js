import React, { useEffect } from "react";
import messageStyle from "./notification.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clear_notification } from "../../Redux/Actions/common.actions";

const Notifications = () => {
    const dispatch = useDispatch();
    const common = useSelector( state => state?.commonReducer )
    const { notification } = common
    let timer = null;
    useEffect( () => {
        if ( timer != null ) {
            window.clearTimeout( timer );
            timer = null;
        } else {
            timer = window.setTimeout( () => {
                dispatch( clear_notification() )
            }, 2000 );
        }
        return () => window.clearTimeout( timer )
    }, [ notification ] )
    if ( notification ) {
        return <div className={ `${ messageStyle.messageContainer } ${ messageStyle.show }` }>
            <span className={ messageStyle.warningCircle }>
                <i className="bi bi-exclamation-circle-fill"/>
            </span>
            <p className={ messageStyle.message }>
                { notification }
            </p>
            <span className={ messageStyle.closeButton }>
                <i className="bi bi-x-lg"/>
            </span>
        </div>
    }
    return null
};

export default Notifications;
