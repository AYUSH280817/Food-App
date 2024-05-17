import ItemList from "./ItemList";
import logo from "../images/1.png"
const Rescategory=(data,showItems,setshowIndex)=>{
// console.log(data.data.itemCards.length)
const handleClick=()=>{ 
data.setshowIndexfunction()
}
return(   
     <div >
     <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
  <div className="flex justify-between cursor-pointer " onClick={handleClick}>
  <span className="font-bold">{data.data.title} ({data.data.itemCards.length})</span>
<span className="w-8 h-4 inline-block">
<img src={logo} className="w-full h-full" alt="Logo" />
</span>
  </div>
{data.showItems && <ItemList items={data.data.itemCards }/>}
     </div>  
     </div>
     
)

}
export default Rescategory;
