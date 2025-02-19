import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function Home() {

    function getPostUsers() {
        return axios.get("https://jsonplaceholder.typicode.com/users");
    }

    const { data, isError, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: getPostUsers, 
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Xato {error.message}</p>;
    }
    console.log(data);
        

    return (
        <div className='flex flex-col gap-2'>
           {
            data.data.length > 0 && data.data.map(function (value, index) {
                return (
                    <div className='p-2 border-2 border-black rounded-md'>
                        <h3>{value.id}</h3>
                        <h3>{value.name}- {value.username}</h3>
                    </div>
                )
            })
           }
        </div>
    );
}

export default Home;
