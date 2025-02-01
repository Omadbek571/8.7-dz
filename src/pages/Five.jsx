import React, { useState } from 'react'
import todoCard from '../store/todocard'

function Five() {
    

    const {addCard, deleteCard} = todoCard()
    const [task, setTask] = useState("")

    return (
        <div className='flex flex-col items-center gap-2'>
            <input type="text" className='p-2 border rounded-md' placeholder='Enter task...' />
            <div className='flex gap-2'>
                <button onClick={handleAdd} className='bg-blue-600 p-2 text-white font-bold rounded-md'>ADD</button>
                <button className='bg-red-600 p-2 text-white font-bold rounded-md'>DELETE</button>
            </div>
        </div>
    )
}

export default Five