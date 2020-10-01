import React from 'react' ;
import styles from './Home.module.css'
import {Link} from 'react-router-dom'
const Home = ()=>{
    return (
        <div className={styles.div}>
            <h1>Welcome to my app</h1>
            <p>This is an app for hacker rank challenge</p>
            <Link to='/speed-counter'>Speed Counter</Link>
        </div>
    )
}
export default Home ;
