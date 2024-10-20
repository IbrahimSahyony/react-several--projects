import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'


export default function ImageSlider({url,limit,page}){

    const [images,setImages]=useState([]);
    const [currentslide,setCurrentSilde] = useState(0);
    const [errmsg,setErrMsg] = useState(null)

    async function fetchImages(getUrl){
        try{

             const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
             const data = await response.json()

             if(data){
                setImages(data)
             }
        }catch(e){setErrMsg(e.massege)}
    }

    function handleLeft() {
        setCurrentSilde(currentslide === 0 ? images.length - 1 : currentslide - 1);
    }
    
    function handleRight() {
        setCurrentSilde(currentslide === images.length - 1 ? 0 : currentslide + 1);
    }


    useEffect(() => {
      if(url !== '') fetchImages(url)
      console.log(images );
    },[])

    
    return(
        <div className="big-container">

        <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" size={500} onClick={handleLeft}/>
        {console.log(images.length)}
        {console.log(images.length)}

       
        {
            images && images.length?(
            images.map((imagesItem,index)=> (
                <img
                key={imagesItem.id}
                alt={imagesItem.download_url}
                src={imagesItem.download_url}
                className={currentslide===index? "current-image" : "hide-current-image"} 
                />
            )))
            :null
    }

        <BsArrowRightCircleFill className="arrow arrow-right" size={500} onClick={handleLeft}/>

        <span className="circle-indicators">
        {
            images && images.length?
            images.map((_,index) => (
               <button key={index} className="current-indicator"></button>
            ))
            :null
        }
        </span>
        
        </div>
        </div>
    )
}