import React, { useState } from 'react'

export default function RandomColor() {
    const [type,settype] = useState('hex')
    const[color,setcolor] = useState("#000000")

    function utilitycolor(length){
     return Math.floor(Math.random() * length)

    }

    function handleCreateHexcolor(){
      let hexcolor ="#";
      let i;
       const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
       
       for(i=0;i<6;i++){
        hexcolor +=  hex[utilitycolor(hex.length)]
        // console.log(hexcolor);
        setcolor(hexcolor)
       } 
    }
    

    function handleCreatergbcolor (){
      
    }
  return (
    <div className='container'
    style={{
     background:color,
     height:"100vh",
     width:"100vw" 
    }}
    >
    
    
    
    <button onClick={() => settype('hex') } > use hex type</button>
    <button onClick={() => settype('rgb') } > use rgb type</button>
    <button onClick={() => type==='hex'? handleCreateHexcolor() : handleCreatergbcolor  } > generate random color</button>
    
    </div>
  )
}
