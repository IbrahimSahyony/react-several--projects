
import './App.css';
import Accordion from './componenets/accordion';
import ImageSlider from './componenets/image-slider';
import LoadMoreData from './componenets/load-more-data';
import Card from './componenets/njdproject2/card';
import RandomColor from './componenets/random-color';
import StarRating from './componenets/star-rating';
import TreeView from './componenets/tree-view';
import menus from './componenets/tree-view/data';
import Pro1 from'./componenets/njdproject2/index'

function App() {
  return (
    <div className="App">
     {/*Accordion app*/}
      {/** <Accordion/> */}

       {/**<RandomColor/> */}
      {/**<RandomColor/> */}
      {/** <star-rating/> */}
      {/**  <StarRating noOfStars={10}/> */} 
       
 {/**  <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}
   <LoadMoreData/>
 {/** <TreeView menus={menus}/> */}
 <Pro1/>
     
  </div>
  
  );
}

export default App;
