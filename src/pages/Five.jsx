import React, { useState } from "react";
import todoCard from "../store/todocard"

function Five() {
    const { addCard, card, deleteCard } = todoCard(); 
    const [task, setTask] = useState("");

    function handleAdd() {
        if (task.trim()) {
            addCard(task);
            setTask("");
        }
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                type="text"
                className="p-2 border rounded-md"
                placeholder="Enter task..."
            />
            <div className="flex gap-2">
                <button onClick={handleAdd} className="bg-blue-600 p-2 text-white font-bold rounded-md">
                    ADD
                </button>
                <button onClick={deleteCard} className="bg-red-600 p-2 text-white font-bold rounded-md mt-2">
                    DELETE ALL
                </button>
            </div>
            <div className="flex flex-col gap-1">
                {card.map((item, index) => (
                    <div key={index} className="p-2 border rounded-md">
                        {item}
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Five;
