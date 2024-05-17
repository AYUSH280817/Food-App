
import { RES_URL } from "../utilis/constants";

const ItemList = (items) => {
  
const handleadditems=()=>{
//dispatch on action
dispatchEvent(additem())



}
    return (
        <div>
            <ul>
                {items?.items?.map((item) =>
                    <div key={item.card.info.id} className="p-2 m-2 border border-gray-400 border-b-2 flex items-center justify-between">
                        <div className="text-left">
                            <div>
                                <span className="font-bold block">{item.card.info.name}</span>
                                <span>RS {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className="text-s">{item.card.info.description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                        <img className="w-13 h-12" src={RES_URL + item.card.info.imageId} alt="404" />
                       <button className="p-1 text-white  bg-black shadow-lg border border-solid border-black"
                       onClick={handleadditems}
                       
                       >Add+</button>
                        </div>
                       
                    </div>
                )}
            </ul>
        </div>
    ); 
}

export default ItemList;
