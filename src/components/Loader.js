import React, { useRef } from 'react'

function Loader() {
    return (
        <div className='load-cont'>
            <div className='load'></div>
            <span>Loading product</span>
        </div>
    )
}

export default Loader