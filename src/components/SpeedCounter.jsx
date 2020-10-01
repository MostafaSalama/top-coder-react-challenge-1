import React from 'react' ;
import useSpeed from "../hooks/useSpeed";
import styles from './SpeedCounter.module.css'
const SpeedCounter = ()=>{
    const [speed,increase,decrease] = useSpeed();
    return (
        <div className={styles.div}>
            <p>Current Speed <span>{speed}</span></p>
            <div>
                <button className={styles.btn} onClick={increase}>Increase Speed</button>
                <button className={styles.btn} onClick={decrease}>Decrease Speed</button>
            </div>
        </div>
    )
}
export default SpeedCounter;
