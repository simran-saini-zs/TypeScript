import { useEffect, useState } from 'react'
import './App.css'
import './Pagination.css'
const Pagination: React.FC = ()=>
{
const [pageNo,setPageNo] = useState<number>(1);
const [data,setData] = useState<any[]>([]);
const max_pageNo:number = Math.ceil(data.length/10);
useEffect(()=>{
    async function fetchdata()
{
   const response:any = await fetch('https://dummyjson.com/products?limit=200');
   const d1 = await response.json();
   setData(d1["products"]);
}
fetchdata();
},[])

console.log(data);
let idx:number = (pageNo-1)*5;
const min:number =  Math.max(1,Math.min(pageNo-1,max_pageNo-2));               
const max:number = Math.min(pageNo+2,max_pageNo);
let arr:number[] = [];

for(let i = min; i <= max; i++)
{
    arr.push(i);
}

console.log(pageNo,min,max,max_pageNo);
    return (
        <>
        <div className="page">
            <div className="page-content">
            {Array.from({length:Math.min(10,data.length-(pageNo-1)*10)}).map((_,i)=>{
                if(data.length != 0)
                {
                    return (
                        <div className='content' key = {i}>
                        <p className='txt'>{data[idx]["title"]}</p>
                        <img src={data[idx++]["images"][0]} alt="hii" className='img'/>
                        </div>
                    )
                }
                else
                {
                    return (
                        <div className='content' key = {i}></div>
                    )
                }
            })
            }
            </div>
            <div className="buttons">
            <button className = {pageNo==1?"btn disabled":"btn"} onClick={()=>{setPageNo(1)}}>{"<<"}</button>
            <button className = "btn" onClick={()=>{setPageNo((prev)=>prev==1?max_pageNo:prev-1)}}>{"<"}</button>
            {arr.map((ele,idx)=>{
                return (
                    <button className = {ele==pageNo?"btn main-btn":"btn"} key = {idx} onClick={()=>{setPageNo(ele)}}>{ele}</button>
                )
            })}

            <button className = "btn" onClick={()=>{setPageNo((prev)=>prev==max_pageNo?1:prev+1)}}>{">"}</button>
            <button className = {pageNo==max_pageNo?"btn disabled":"btn"} onClick={()=>{setPageNo(max_pageNo)}}>{">>"}</button>
            </div>
        </div>
        </>
    )
}
export default Pagination