import React from 'react'
import { ImStarFull, ImStarEmpty } from 'react-icons/im';
function Rating({ rating }) {
    return (
        [...Array(5)].map((_, idx) => idx < rating ? <ImStarFull className='text-warning fs-5 ms-1' key={idx} />
            : <ImStarEmpty className='text-warning fs-5 ms-1' key={idx} />)
    )
}

export default Rating