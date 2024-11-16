import useToggle from "./components/useToggle";
import React from "react";

function App() {
    const [count,Zero,Increment,Decrement] = useToggle(0);

    
    return (
        <div>
            <button onClick={Increment}>Increment</button>
           
            <button onClick={Decrement}>Decrement</button>
           
            <button onClick={Zero}>Zero</button>
            <p>{count}</p>

        </div>
    );
}

export default App;
