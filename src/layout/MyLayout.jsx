import React from 'react';
import { Link } from 'react-router-dom';  

function MyLayout() {
    return (
        <div className='bg-gray-800 p-4'>
            <nav className="container flex mx-auto">
                <ul className="flex space-x-4">
                    <li className='p-2 rounded-md bg-blue-500 w-15 text-center font-bold'>
                        <Link to="/" className="text-white hover:text-gray-400">1</Link>
                    </li>
                    <li className='p-2 rounded-md bg-blue-500 w-15 text-center font-bold'>
                        <Link to="/two" className="text-white hover:text-gray-400">2</Link>
                    </li>
                    <li className='p-2 rounded-md bg-blue-500 w-15 text-center font-bold'>
                        <Link to="/three" className="text-white hover:text-gray-400">3</Link>
                    </li>
                    <li className='p-2 rounded-md bg-blue-500 w-15 text-center font-bold'>
                        <Link to="/four" className="text-white hover:text-gray-400">4</Link>
                    </li>
                    <li className='p-2 rounded-md bg-blue-500 w-15 text-center font-bold'>
                        <Link to="/five" className="text-white hover:text-gray-400">5</Link>
                    </li>
                    <li className='p-2 rounded-md bg-blue-500 w-15 text-center font-bold'>
                        <Link to="/olti" className="text-white hover:text-gray-400">6</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MyLayout;
