import React from 'react' ;
import useCounter from "../hooks/useCounter";

const SpeedCounter = ()=>{
    const [counter,increase,decrease] = useCounter();
    return (
        <div>
            <p>Current Counter is <span>{counter}</span></p>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    )
}
export default SpeedCounter; 
