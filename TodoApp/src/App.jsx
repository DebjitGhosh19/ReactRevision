import React, { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState([])
  const [task,setTask]=useState("")
   const [date,setDate]=useState("")
  const addButton=(e)=>{
      e.preventDefault()
      
   setTodo([...todo,{task,date}])
    setTask("")
     setDate("")
  }
  const deleteBtn=(task)=>{
    
   setTodo(todo.filter((t)=>t.task!==task))

  }
  return (
    <div className='w-full flex justify-center mt-5'>
       <div className='flex border p-4  flex-col'>
        <div className='flex items-center p-2 m-2 justify-between gap-4 '>
          <input  type="text" placeholder='Enter your task' className='border p-2 ' required value={task} onChange={(e)=>{setTask(e.target.value)}}/>
          <input type="date" className='border p-2' required value={date} onChange={(e)=>{setDate(e.target.value)}}/>
          <button  onClick={addButton} className=' bg-green-500 text-white px-4 py-2 border-2 rounded cursor-pointer'>Add</button>
        </div>
        <div className='flex flex-col' >
          {
            todo.map((t)=>(
              <div key={t.task} className='flex items-center p-2 m-2 justify-between border'>
                <p>{t.task}</p>
                <p>{t.date}</p>
                <button className='bg-red-500 text-white px-4 py-2 cursor-pointer' onClick={(e)=>{deleteBtn(t.task)}}>Dlete</button>
              </div>
            )
            )
          }
        </div>
       </div>
    </div>
  )
}

export default App