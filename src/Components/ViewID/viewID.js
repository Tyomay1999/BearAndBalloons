import React from 'react'
import viewIDStyles from './viewID.module.scss'

const ViewID = ({is_touched}) => {
    return <div className={viewIDStyles.main}>
        <div className={is_touched ? `${viewIDStyles.loader} ${viewIDStyles['loader--active']}` : viewIDStyles.loader}>
            <div className={viewIDStyles.loaded_page}>
                <div className={`${viewIDStyles.logo_block} ${viewIDStyles.block}`}>Bear And Balloons</div>
                <div className={`${viewIDStyles.middle_block} ${viewIDStyles.block}`}>Input Block</div>
                <div className={`${viewIDStyles.under_block} ${viewIDStyles.block}`}>Under Block</div>
            </div>
            <div className={viewIDStyles.loader__tile}></div>
            <div className={viewIDStyles.loader__tile}/>
            <div className={viewIDStyles.loader__tile}/>
            <div className={viewIDStyles.loader__tile}/>
            <div className={viewIDStyles.loader__tile}/>
        </div>
    </div>
}

export default ViewID