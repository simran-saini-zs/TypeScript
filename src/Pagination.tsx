import { useEffect, useState } from 'react'
import './App.css'
import './Pagination.css'
const Pagination: React.FC = ()=>
{
const [pageNo,setPageNo] = useState<number>(1);
const [data,setData] = useState<any[]>([]);
const max_pageNo:number = data.length/10;
useEffect(()=>{
    async function fetchdata()
{
   const response:any = await fetch('https://dummyjson.com/products?limit=100');
   const d1 = await response.json();
   setData(d1["products"]);
}
fetchdata();
},[])
console.log(data);
let idx:number = (pageNo-1)*5;
    return (
        <>
        <div className="page">
            <div className="page-content">
            {Array.from({length:10}).map((_,i)=>{
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
                
                <button className={pageNo==1?'btn disable':'btn'} onClick={()=>{setPageNo(max_pageNo)}}>≪</button>
                <button className={pageNo==1?'btn disable':'btn'} onClick={()=>{setPageNo((prev)=>prev == max_pageNo?1:prev-1)}}>{"<"}</button>
                
                {pageNo-2 == max_pageNo-2 ?<button className='btn btn-2' onClick={()=>{setPageNo((prev)=>prev-2)}}>{pageNo-2}</button>:null }
                {pageNo-1 >= max_pageNo-2? <button className='btn btn-2' onClick={()=>{setPageNo((prev)=>prev-1)}}>{pageNo-1}</button>:null}
                <button className='btn main-btn'>{pageNo}</button>
                {pageNo+1 <= max_pageNo?  <button className='btn btn-2' onClick={()=>{setPageNo((prev)=>prev+1)}}>{pageNo+1}</button>:null}
                {pageNo+2 <= max_pageNo?  <button className='btn btn-2' onClick={()=>{setPageNo((prev)=>prev+2)}}>{pageNo+2}</button>:null}

                {pageNo+2 < max_pageNo?<button className='btn btn-2'>.....</button>:null}
                <button className={pageNo==max_pageNo?'btn disable':'btn'} onClick={()=>{setPageNo((prev)=>prev==max_pageNo?1:prev+1)}}>{">"}</button>
                <button className={pageNo==max_pageNo?'btn disable':'btn'} onClick={()=>{setPageNo(1)}}>≫</button>
            </div>
        </div>
        </>
    )
}
export default Pagination