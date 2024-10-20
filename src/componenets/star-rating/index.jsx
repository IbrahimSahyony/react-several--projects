import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css'

export default function StarRating({ noOfStars = 5 }) {

    const [hover,sethover] = useState(0);
    const [rating,setrating] =useState(0);


     function handleStarClick(getcurrentindex){
       setrating (getcurrentindex)
        console.log(getcurrentindex)

    }

    function handleStarHover(getcurrentindex){
       sethover (getcurrentindex)   
     console.log(getcurrentindex)
    }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const starindex = index + 1;
        /*  const stars = Array.from({ length: noOfStars }, (_, index) => (
    <FaStar key={index} size={40} />
  ));
 */


        return (
          <FaStar
            key={starindex}
            className={starindex <= (hover || rating)?'active':'unactive'}
            onClick={() => handleStarClick(starindex)}
            onMouseMove={() => handleStarHover(starindex)}
            onMouseLeave={() => {sethover(0)}}
            size={40}
          />
        );
      })}
    </div>
  );
}