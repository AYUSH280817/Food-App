import React, { useEffect, useState } from 'react';
import Restaurantcard,{withPromtedlabel} from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilis/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utilis/UserContext';
const Body = () => {
    const [listofRestaurant, setlistofRestaurant] = useState([]);
    const [filterrestaurant, setfilterrestaurant] = useState([]);
    const [SearchText, setSearchText] = useState("");
const {loggedINUser,setuserName}=useContext(UserContext)
    useEffect(() => {        
        fetchdata();
    }, []);
    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setlistofRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilterrestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    } 
    // Conditional Rendering      
    const onlinestatus =useOnlineStatus();
if(onlinestatus===false){
   return <h1>You are offline</h1>
}
    if (listofRestaurant.length === 0) {
        return <Shimmer />;
    }
    return (
        <div id="body" >
            <div id="search" className='flex'>
                 <div > 
                    <input
                        type="text"
                        className="p-4 m-4 border border-solid border-black"
                        value={SearchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button id="search-btn" onClick={() => {
                        const filterres = filterrestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                        );
                        setfilterrestaurant(filterres);
                    }}>
                    <span className="bg-lime-300 m-4 p-1 border border-solid border-black "> Search</span>   
                    </button>
                </div>
                <button
                    id="res_btn"
                    onClick={() => {
                        const filter = filterrestaurant.filter((res) => res.info.avgRating > 4);
                        setfilterrestaurant(filter);
                    }}
                >
                   <span className="bg-pink-500 p-2 m-10 border border-solid border-black">Top Rated Restaurant</span>
                </button>
<label className='m-6'>UserName:</label>
                  <input className="p-4 m-4 border border-solid border-black"
                    value={loggedINUser}
                    onChange={(e)=>setuserName(e.target.value)}
                  />


            </div>
            <div id="res-container" className='flex flex-wrap gap-10'>
                {
                    filterrestaurant.map((restaurant) =><Link 
                    key={restaurant.info.id}
                    to={"/restaurants/"+restaurant.info.id}
                    >
                              <Restaurantcard  resData={restaurant}/></Link>
                     )}
            </div>
        </div>
    );
}
export default Body;
 