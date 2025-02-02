import React, { useRef } from "react";
import useLoginMal from "../store/loginMalumot";

function Seven() {
    const nameRef = useRef();
    const passwordRef = useRef();
    const { login, loginpush, message } = useLoginMal();

    function handleLogin() {
        let userLogin = {
            name: nameRef.current.value,
            password: passwordRef.current.value, 
        };

        loginpush(userLogin); 
    }

    return (
        <div className="flex flex-col mx-auto items-center gap-4">
            <div className="gap-2 flex">
                <input className="border-2 rounded-md p-2" ref={nameRef} type="text" placeholder="Enter name..." />
                <input className="border-2 rounded-md p-2" ref={passwordRef} type="password" placeholder="Enter password..." />
            </div>
            <div>
                <button className="border-2 w-44 font-bold bg-blue-400 rounded-md p-2" onClick={handleLogin}>
                    Login
                </button>
            </div>
            
            {message && <div className="text-lg font-bold">{message}</div>}

            <div>
                <h3 className="font-bold">Login qilingan foydalanuvchilar:</h3>
                {login.map((value, index) => (
                    <div key={index} className="border p-2 rounded bg-gray-200 my-1">
                        {value.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Seven;
