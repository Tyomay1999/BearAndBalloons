import React from 'react'
import modalStyle from './modal.module.scss'
import bear_gift from '../../Assets/BEAR_GIFT_2.png'

const Modal = () => {
    return <div className={ modalStyle.main }>
        <div className={modalStyle.modal_container}>
            <img src={bear_gift} alt="Bear & gift"/>
        </div>
    </div>
}

export default Modal