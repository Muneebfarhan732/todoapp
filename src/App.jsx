import { useState } from 'react';
import InputType from './component/InputType';
import DateTime from './component/pages/DateTime';
import Display from './component/pages/Display';
import ClearAll from './component/pages/ClearAll';
const ToDoShow = () => {
  let jsonParse = localStorage.getItem('ReactToDo')
  if (!jsonParse) return []
  return JSON.parse(jsonParse)
}

function App() {
  const [userInput, setUserInput] = useState({})
  const [task, settask] = useState(() => ToDoShow())
  const [dateTime, SetDateTime] = useState('')
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800 p-4'>
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">To-Do List</h2>
          <DateTime dateTime={dateTime} SetDateTime={SetDateTime} />
          <div className="flex space-x-2 mb-4">
            <InputType userInput={userInput} setUserInput={setUserInput} task={task} settask={settask} />
          </div>
          <Display task={task} settask={settask} />
          <div className='flex justify-end items-end'>
            <ClearAll task={task} settask={settask} />
          </div>
        </div>
      </div>
    </>
  )
}
export default App
