import { useState } from "react"

export function Counter() {
    const [counter, set_counter] = useState(0);
    return (

        <>
            <h1>Counter</h1>
            <p>Counter value is {counter}</p>
            <button 
            onClick={() => set_counter(counter+1)}
            className="bg-pink-700 rounded-2xl text-white p-3"
            >+ counter</button>
                        <button 
            onClick={() => set_counter(counter-1)}
            className="bg-yellow-700 rounded-2xl text-white p-3"
            >+ counter</button>
        </>
    );
}