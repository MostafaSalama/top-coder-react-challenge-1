import {useState} from 'react' ;

function useSpeed() {
        const [counter,setSpeed] = useState(0) ;
        function increase() {
                setSpeed(prevSpeed => {
                        const newValue =  +prevSpeed + (1/100);
                        console.log(newValue);
                        console.log(typeof newValue) ;
                        return newValue >= 2 ? 2 : newValue.toFixed(3) ;
                })
        }
        function decrease() {

                setSpeed(prevSpeed => {
                       const newValue =  +prevSpeed - (1/100)
                        return newValue <= 0 ? 0 : newValue.toFixed(3) ;
                });
        }
        return [counter,increase,decrease] ;
}
export default useSpeed;
