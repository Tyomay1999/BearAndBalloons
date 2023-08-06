import React, { useState } from 'react'
import modalStyle from './modal.module.scss'
import bear_gift from '../../Assets/BEAR_GIFT_2.png'
import Door from '../../Assets/door.jpg'

const Modal = () => {

    const [ see_image, set_see_image_state ] = useState( false )

    return <div className={ modalStyle.main }>
        <div  className={ modalStyle.modal_container }>
            <div className={ modalStyle.message_wrapper }>
                <h1>Find your gift in a real place</h1>
            </div>
            <img onClick={() => set_see_image_state(true)} src={ bear_gift } alt="Bear & gift"/>
        </div>
        {
            see_image ? <div onClick={() => set_see_image_state(false)} className={ modalStyle.large_image_box }>
                <div onClick={(e) => e.stopPropagation()} className={ modalStyle.wrapper }>
                    <img src={ Door } alt="Gift"/>
                    <button
                        onClick={() => {
                            set_see_image_state(false)
                        }}
                        className={ modalStyle.close }><span>X</span></button>
                </div>
            </div> : <></>
        }

    </div>
}

export default Modal