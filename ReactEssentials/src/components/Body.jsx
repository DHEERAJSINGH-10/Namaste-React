import { useState,useEffect } from 'react';
import './Body.css';
import { Button } from './Button';
import { RestrauntContainer } from './RestaurantsConatiner';


export const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
     const apiFetch = async ()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4595&lng=77.0266&page_type=DESKTOP_WEB_LISTING");
   const response =  await data.json();
   console.log(response.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
const  res =response.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
setRestaurants(res);
    }
      apiFetch();}
  ,[]);

      const handleClick = () => {
    const filtered = restaurants.filter((res) => res.info.avgRating > 4.4);
    setRestaurants(filtered); // ✅ inside handleClick
  };
 
   
  return (
    <section className="body">
      <Button name="Top-Rated Restaurants" onClick={handleClick} />
      <RestrauntContainer restaurants={restaurants} />
    </section>
  );
};

