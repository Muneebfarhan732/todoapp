import React from 'react'
import { useEffect } from 'react';


const DateTime = ({ dateTime, SetDateTime }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            SetDateTime(new Date().toLocaleString())
        }, 1000);
        return () => { clearInterval(interval) }
    }, [])
    return (
        <>
            <h2 className='text-gray-500 mb-3  text-center font-bold'>{dateTime}</h2>
        </>
    )
}

export default DateTime
