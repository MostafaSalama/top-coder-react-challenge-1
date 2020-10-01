import {useState} from 'react' ;

function useSpeed() {
        const [counter,setSpeed] = useState(0) ;
        function increase() {
                setSpeed(prevCounter => {
                        const newValue =  prevCounter + (1/100)
                        return newValue >= 2 ? 2 : newValue ;
                })
        }
        function decrease() {

                setSpeed(prevCounter => {
                       const newValue =  prevCounter - (1/100)
                        return newValue <= 0 ? 0 : newValue ;
                });
        }
        return [counter,increase,decrease] ;
}
export default useSpeed;
