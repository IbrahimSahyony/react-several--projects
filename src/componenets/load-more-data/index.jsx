import { useEffect, useState } from "react";
import './style.css'

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disable,setdisable] = useState(false)

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`
     );
      const result = await response.json();
      setProducts((prevdata) => [...prevdata,...result.products]); //تستخدم في حال تريد اظهار المنتجات متتابعة
   // setProducts(result.products) تستخدم في حال next
      
     
    } catch (e) { }
    
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() =>{
    if(products && products.length ===50) setdisable(true)
  },[products])

  return (
    <div className="load-more-container">
      <div className="product-container">
        {
            products && products.length?
            products.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.title}/>
                  <p>{item.title}</p>
                </div>
                
               
            )):null
        }
      </div>
      <div className="buttom-container">
      <button disabled={disable} onClick={() => {setcount(count+1)}}
      >Load more data</button>
      {
        disable?<p> reched</p>:null
      }
      </div>
    </div>
  );
}
