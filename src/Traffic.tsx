import { useEffect, useState } from 'react'
import './Traffic.css'

function Traffic()
{
    const [light,setLight] = useState<number>(0);
    let time:number[] = [5000,2000,3000];
    //Using UseEffect:
    // useEffect(()=>{
    //     let timer:number = 3000*(light+1);
    //     console.log(timer);
    //     let id:any = setTimeout(()=>{
    //         setLight((prev)=> prev==2 ? 0:prev+1);
    //     },timer);

    //     return (()=> clearInterval(id));
    // },[light]);

    //Using setTimeout:
    // console.log(light,time[light]);
    // setTimeout(()=>{
    //     setLight((prev)=> (prev+1)%3);
    // },time[light]);
  
    return (
        <div className='container'>
        <div className={light==0?'light red':'light'}></div>
        <div className={light==1?'light yellow':'light'}></div>
        <div className={light==2?'light green':'light'}></div>
        </div>
    )
}
export default Traffic