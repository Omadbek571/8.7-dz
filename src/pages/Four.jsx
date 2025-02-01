import React from 'react'
import useStore from '../store/counter';
function Four() {

    const { counter, increment, decrement } = useStore()

    return (
        <div className='flex  flex-col items-center gap-2'>
            <h3 className='p-2 bg-blue-400 w-20 rounded-md text-white text-center font-bold'>{counter}</h3>
            <div className='gap-2 flex'>
                <button className='bg-blue-500 p-2 text-white rounded-md w-20 font-bold' onClick={increment}>+</button>
                <button className='bg-blue-500 p-2 text-white rounded-md w-20 font-bold' onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default Four