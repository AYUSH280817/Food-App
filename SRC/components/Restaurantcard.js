import { RES_URL } from "../utilis/constants";
import React from 'react';

const Restaurantcard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, deliveryTime } = resData?.info;
    
    return (
        <div className="w-[250px] h-[450px] border border-solid border-black bg-gray-50 hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <div id="img-logo" className="w-[250px] h-[225px]">
                <img className="w-[250px] h-[225px] object-cover" src={RES_URL + resData.info.cloudinaryImageId} />
            </div>
            <h3 className="m-4">{name}</h3>
            <h4 className="m-4">{cuisines.join(" , ")}</h4>
            <h4 className="m-4">{avgRating}</h4>
            <h4 className="m-4">{deliveryTime}</h4>
        </div>
    );
};



export default Restaurantcard;
