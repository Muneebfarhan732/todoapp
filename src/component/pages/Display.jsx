import React from 'react';
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Display = ({ settask, task }) => {
    const handleDelete = (value) => {
        const updateFun = task.filter((currElem) => currElem !== value);
        settask(updateFun);
    };

    const handleLineThrough = (value) => {
        const updatedTasks = task.map((currElem) =>
            currElem === value ? { ...currElem, checked: !currElem.checked } : currElem
        );
        settask(updatedTasks);
    };

    return (
        <>
            <ul className="list-none bg-gray-100 p-4 rounded-lg shadow-md space-y-2">
                {task.map((currElem, index) => (
                    <li
                        key={index}
                        className={`p-2 bg-white rounded-lg shadow-sm hover:bg-blue-100 transition duration-300 ${currElem.checked ? 'line-through text-gray-500' : ''
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            {currElem.content.toUpperCase()}
                            <span className="flex items-center gap-3">
                                <FaCheck
                                    color="green"
                                    className="cursor-pointer"
                                    size={20}
                                    onClick={() => handleLineThrough(currElem)}
                                />
                                <MdDelete
                                    color="red"
                                    className="cursor-pointer"
                                    size={20}
                                    onClick={() => handleDelete(currElem)}
                                />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Display;
