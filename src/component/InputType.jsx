import React from 'react'

const InputType = ({ userInput, setUserInput, task, settask }) => {
    const handleSubmit = (e) => {
        const { id, content, checked } = userInput
        console.log(userInput)
        e.preventDefault()
        setUserInput({ id: '', content: '', checked: '' })
        const toCheck = task.find((currentElem) => currentElem.content == content)
        if (toCheck) return
        settask((pretask) => [...pretask, { id, content, checked }])
    }
    // localStorage getdata 
    localStorage.setItem('ReactToDo', JSON.stringify(task))
    const handleChange = (value) => {
        setUserInput({ id: value, content: value, checked: false })
    }
    return (

        <>
            <form className='w-full flex gap-3' onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoFocus
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Add a new task..."
                    value={userInput.content}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button
                    type='submit'
                    className={`p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300`}
                // disabled={!userInput.trim()}
                >
                    ➕
                </button>
            </form>
        </>
    )
}

export default InputType
