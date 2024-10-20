import React, { useEffect, useState } from "react";
import Card from "./card";



export default function Por1(){
  
   const [data,setData] = useState([])
   const showdata =data.map((item,index) => <Card name={item} key={index}/>)
    
   useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').
    then(res => res.json()).
    then( data => setData(data.data.memes.map(item => (item.name))))
   },[])

   

    return(
        <div>
           {showdata}
        </div>
    )
}