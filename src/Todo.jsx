import React, { useEffect, useState } from 'react'
import './todo.css';
import TodoTasks from './TodoTasks';
import DateTime from './DateTime';

const Todo = () => {
    
    const todoLocalkey = "r-todo" ;
    const [inputVal, setInputVal] = useState("");
    const [task, setTask] = useState(()=>{
        const reactTodosGetLocal = localStorage.getItem(todoLocalkey);
        if(!reactTodosGetLocal) return []
        return JSON.parse(reactTodosGetLocal)
    });


    // console.log(task, 'task');

    
    const handleInputEvent = (value) => {
        setInputVal(value)
    }
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        if (!inputVal) return;
        
        // if (task.includes(inputVal)) {
            //     setInputVal("")
            //     return;
            // }
            console.log(inputVal, 'inputVal');
            setTask((prev) => [...prev, {id : Date.now ,content :inputVal , checked : false}])
            
            setInputVal("")
        }
        
        
        const deleteTodo = (currentValue) => {
            console.log(currentValue, 'currentValue');
            const afterDeleteUpdatedArray = task.filter((item) => item.content != currentValue);
            
            setTask(afterDeleteUpdatedArray)
        }
        
        const checkTodo = (currentValue) => {
            console.log(currentValue , 'on check')
            const updatedTask = task.map((ele)=>{
                if(ele.content === currentValue){
                    return {...ele , checked : !ele.checked};
                }else{
                    return ele
                }
            })
            setTask(updatedTask)
        }
        
        // clear all todos ----
        const clearTodos = () => {
            setTask([])
        }
        
        // add local storage -- 
        localStorage.setItem( todoLocalkey , JSON.stringify(task))
        
        return (
            <div>
            <section className='todo-container'>
                <header>
                    <h1>Todo List</h1>
                    <DateTime />
                </header>

                <section className='form'>
                
                    <form onSubmit={handleSubmit}>
                        <div>
                            {/* <input type="text" className='todo-input' value={val} onChange={(e)=> setInputVal(e.target.val)}  /> */}
                            <input type="text" className='todo-input' value={inputVal} onChange={(e) => handleInputEvent(e.target.value)} />
                        </div>

                        <button type='submit'> Add Task</button>

                    </form>

                    <section className='myUnOrdList'>
                            <TodoTasks task={task} deleteTodo={deleteTodo} checkTodo={checkTodo} />
                    </section>
                    <button className='clearall' style={{ background: "red", margin: "25px auto", display: "block", fontSize: "25px", cursor: 'pointer', }} onClick={clearTodos}>clear All</button>


                </section>

            </section>
        </div>
    )
}

export default Todo
