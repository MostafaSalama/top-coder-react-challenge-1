import React from 'react' ;
import useSpeed from "../hooks/useSpeed";

const SpeedCounter = ()=>{
    const [speed,increase,decrease] = useSpeed();
    return (
        <div>
            <p>Current Speed <span>{speed}</span></p>
            <div>
                <button onClick={increase}>Increase Speed</button>
                <button onClick={decrease}>Decrease Speed</button>
            </div>
        </div>
    )
}
export default SpeedCounter;
