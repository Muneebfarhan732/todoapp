import React from 'react'

const ClearAll = ({ settask, task }) => {
    const handleClearAll = () => {
        console.log(settask)
        console.log(task)
        settask([])
        console.log(task)
    }
    return (
        <>
            <button className='bg-indigo-200 cursor-pointer px-6 py-2 mt-3 rounded-lg' onClick={handleClearAll}>Clear ALL</button>
        </>
    )
}

export default ClearAll
