import React, { useState } from "react";

import { useEffect } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import Rescategory from "./Rescategory";
const RestaurantMenu = () => {

const [showIndex,setshowIndex]=useState(null);
    const { resid } = useParams();
    const resInfo = useRestaurantMenu(resid);

    if (resInfo == null) {
        return <Shimmer />
    }
    const { name, avgRating, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.
            REGULAR?.cards[1]?.card?.card;

  
            // console.log(  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    const categories =
     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
// console.log(categories)
    return (
        <div className="text-center">
            <h1 className=" font-bold">{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>{avgRating} Star</h2>
          {categories.map((category,index)=>(
            <Rescategory  
          data={category.card.card}
          showItems={index===showIndex?true:false } 
           setshowIndexfunction={()=>{
           if(showIndex==index){
            setshowIndex(null)
           } 
           else{
            setshowIndex(index)
           }
           
           }
           }
          />))}

        </div>
    )
}
export default RestaurantMenu;

