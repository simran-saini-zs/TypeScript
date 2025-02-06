import "./Input.css"
import { useState,useRef } from "react"
function Input()
{
   const [input,setInput] = useState<string>("");
   

//    Using useRef:
//    const ref = useRef(null);
//    function handlechange(event:any)
//    {
//      setInput(event.target.value);
//      setTimeout(() => {
//         ref.current.value  = event.target.value;
//      }, 1000);
//    }
  

//Using two states:
//const[input2,setInput2] = useState<string>("");
// function handlechange(event:any)
// {
//     setInput(event.target.value);
//     setTimeout(()=>{
//         setInput2(event.target.value);
//     },1000);
// }

//Using only one state:
 function handlechange(event:any)
 {
    setTimeout(()=>{
        setInput(event.target.value);
    },1000);
 }
   
   return (
    <div className="containers">
        <input type="text" className='firstInput' onChange={handlechange}/>
        <input type="text" className='secondInput' value = {input} onChange={()=>{}}/>
    </div>
   )
}

export default Input