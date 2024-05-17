import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MENUAPI_URL } from "./constants";

const useRestaurantMenu=(resid)=>{
    const [resInfo,setresInfo]=useState(null);
useEffect(()=>{
fetchData();
},[]);
const fetchData=async()=>{
    const data= await fetch(MENUAPI_URL+resid)
    const json=await data.json()
    // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR);
    setresInfo(json.data);
}

return resInfo;

}
export default useRestaurantMenu;