import { useEffect, useRef, useState } from "react"
export default function useImage(url:string)
{
    let [data,setData] = useState<{src:string,alt:string,id:string}[]>([]);
    let [err,setErr] = useState<any>("");
    let [isloading,setIsloading] = useState<boolean>(true);

    useEffect(()=>{
        async function apicall()
    {
       try
       {
        let response = await fetch(url);
        let data = await response.json();
        setIsloading(false);
        setData(data);
        console.log(data);
       }
       catch(error)
       {
        setErr(error);
        console.log(error);
        setIsloading(false);
       }
    }
    apicall();
    }
    ,[url]);
    return {data,err,isloading};
}