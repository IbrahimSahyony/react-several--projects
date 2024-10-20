import { useState } from 'react';
import { FaStar } from 'react-icons/fa';


export default function Starrating({noofstar=5}){
      
    const [hover,setHover]=useState(0);
    const [click,setClick]=useState(0);

    function handleOnClick(currentindex){
        setClick(currentindex)
        console.log(" click = " + click);
    }

    function handleOnMouseMove (currentindex){
        setHover(currentindex)
    }


    return(
        <div>
        {[...Array(noofstar)].map((_, index) => {
            
        const starindex = index + 1;
            console.log(" index = " + index)
            console.log(" starindex = " + starindex)
        return(
            <FaStar
            key={starindex}
            color={(starindex <= click || starindex <= hover)?'#fff700':'black'}
            size={40}
            onClick={() =>handleOnClick(starindex)}
            onMouseMove={() => handleOnMouseMove(starindex)}
            onMouseLeave={ () => setHover(0)}
            />
        );

      })}
        </div>
      
    );
}