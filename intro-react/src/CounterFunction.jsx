import {useState, useEffect} from 'react'

function CounterFunction(){
    const log = (key) => console.log(`${key} ${new Date().getTime()}`);
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(0)
   
    const ONE_SECOND_IN_MS = 1000;

    function tick(){
        if(time <= 5){
            setTime((time) => time + 1 )
        }else{
            return () => clearInterval(interval);
        }
        log("tick")
    }

    useEffect(() =>{
        const interval = setInterval(() => tick(), ONE_SECOND_IN_MS)
        
        log("did mount")
    }, [])

    useEffect(()=>{
        log("did update")
        console.log(time)
    }, [time])

    return(
        <> 
            {log("render")}
            <h1>Holaaa</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                Count is {count}
            </button>
            <p>Time is {time}</p>
        </>
    )
}

export default CounterFunction