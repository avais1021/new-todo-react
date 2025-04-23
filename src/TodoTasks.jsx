import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa6'

const TodoTasks = ({task,deleteTodo,checkTodo}) => {
    return (
        <>
            <ul>
                {task.map((currTask, index) => {
                    return (
                        <li key={index}>
                            <span className={currTask.checked ? "check-active" : ''}>{currTask.content}</span>
                            <div>
                            <button  className='check-btn' onClick={() => checkTodo(currTask.content)}>
                                <FaCheck />
                            </button>
                            <button className='delete-btn' onClick={() => deleteTodo(currTask.content)}>
                                <AiOutlineDelete />
                            </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TodoTasks
