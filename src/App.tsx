import { useState,useRef } from 'react'
import Carousel from './Carousel'
import useImage from './useImages'

function App() {
 let {data,error,isloading} = useImage("http://localhost:3000/images");
 let ref = useRef(null);
  if(isloading)
  {
    setTimeout(() => {
      console.log(ref);
    }, 1000);
  }
  console.log(ref);
  return (
    <>
    {!isloading &&  <Carousel data = {data} reference = {ref}/>}
    </>
  )
}

export default App
