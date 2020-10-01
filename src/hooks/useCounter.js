import {useState} from 'react' ;

function useCounter() {
        const [counter,setCounter] = useState(0) ;
        function increase() {
                let newCounter = counter +  counter * (10/100) ;
                setCounter(newCounter) ;
        }
        function decrease() {
                let newCounter = counter - counter * (10/100) ;
                setCounter(newCounter);
        }
        return [counter,increase,decrease] ;
}
export default useCounter;
