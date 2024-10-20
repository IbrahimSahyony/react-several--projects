//single selection 
//multible selection

import { useState } from "react"
import data from "./data"
import './style.css'

export default function Accordion(){
    const [select,setselect] = useState(null);
    const [enablemultible, setenablemultible] = useState(false);
    const [multible,setmultinle] = useState([]);
    const [Dmultible,setDmultinle] = useState([]);
    
    function handlesingleSelection(getcurrentid){
        setselect(getcurrentid === select? null:getcurrentid);
    }
    function handlemultibleSelection(getcurrentid){
        let cpyMultible =   [...multible]
        const findeindexOfcurrentid = cpyMultible.indexOf(getcurrentid)
        console.log(findeindexOfcurrentid)

        if(findeindexOfcurrentid === -1){
            cpyMultible.push(getcurrentid)
        }else cpyMultible.splice(findeindexOfcurrentid)

        setmultinle(cpyMultible)
        
    }

    console.log(multible)
    return <div className="wrapper">
    <button onClick={() => setenablemultible(!enablemultible)}> Enable multible Selection </button>
    <div className="accordion">
    {
        data && data.length? data.map(dataItem => <div className="item" key={dataItem.id}>
        <div className="title" onClick={ 
            () => enablemultible?handlemultibleSelection(dataItem.id)
            : handlesingleSelection(dataItem.id)}>
        <h3>{dataItem.question}</h3>
        <span>+</span>
        </div>

        
          {
            multible.indexOf(dataItem.id) !== -1 ? 
            <div className="content">
            {dataItem.answer}
            </div> :null
          }

        {
            select===dataItem.id &&
            <div className="content">
            {dataItem.answer}
            </div>
        }
        
        </div>)  : "no data found !"
    }

    </div>
    </div>
}