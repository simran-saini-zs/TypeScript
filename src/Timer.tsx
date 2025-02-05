import './Timer.css'
import { useEffect, useRef, useState } from 'react'
function Timer(){

    const [Time,setTime] = useState<number[]>([0,0,0]);
    const [start,setStart] = useState<number>(0);
    const hour = useRef(null);
    const min = useRef(null);
    const sec = useRef(null);
    console.log(Time);
    useEffect(()=>{
        if(start==1)
        {
            let id:any;
            if(Time[2])
            {
             id = setTimeout(()=>{
                setTime([Time[0],Time[1],Time[2]-1]);
             },1000);
            }
            else if(Time[1])
            {
             id = setTimeout(()=>{
                setTime([Time[0],Time[1]-1,Time[2]]);
             },1000*60);
            }
            else
            {
             id = setTimeout(()=>{
                setTime([Time[0]-1,Time[1],Time[2]]);
             },1000*120);
            }
    
            return (()=>{clearTimeout(id)});
        }
        else if(start==2)
        {
            console.log("start the game!");
        }
    },[Time,start]);
    
    function handlereset()
    {
        setStart(0);
        setTime([0,0,0]);
        sec.current.value = "";
        hour.current.value = "";
        min.current.value = "";
    }
    
    function handlestart()
    {
        let hours:number,minutes:number,seconds:number;
        seconds = parseInt(sec.current.value)>0?parseInt(sec.current.value):0;
        hours =  parseInt(hour.current.value)>0?parseInt(hour.current.value):0;
        minutes = parseInt(min.current.value)>0?parseInt(min.current.value):0;
    
       
        minutes += Math.floor(seconds/60);
        seconds = seconds%60;
        hours += Math.floor(minutes/60);
        minutes = minutes%60;
        console.log(seconds,hours,minutes);
    
        if(hours==0 && minutes == 0 && seconds == 0)
        {
            alert("Please Enter the Timer!");
            sec.current.value = "";
            hour.current.value = "";
            min.current.value = "";
        }
        else
        {
            setTime([hours,minutes,seconds]);
            sec.current.value = seconds;
            hour.current.value = hours;
            min.current.value = minutes;
            setStart(1);
        }
    }
    return(
        <div className='container'>
         <h2 className='timer-heading'>Enter the Timer</h2>
         <div className="input">
            <input type="number" ref = {hour}/>
            <input type="number" ref = {min}/>
            <input type="number" ref = {sec}/>
         </div>
         <div className="buttons">
            {start==0 && <button onClick={handlestart}>Start</button>}
            {start==1 &&  <button onClick={()=>setStart(2)}>Pause</button>}
            {start==2 && <button onClick={()=>setStart(1)}>Resume</button>}
            <button onClick={handlereset}>Reset</button>
         </div>
         <p>Timer:</p>
         <div className="output">
            <span>{Time[0]}</span>
            <span>{Time[1]}</span>
            <span>{Time[2]}</span>
         </div>
        </div>
    )
}

export default Timer