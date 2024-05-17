import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
  import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utilis/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
    const [userName,setuserName]=useState();
    useEffect(()=>{
   const data={
    name:"Ayush Singh"
   }
   setuserName(data.name);
    },[]);
  
return( 
    <Provider store={appStore}>
<div id="app">

<UserContext.Provider value={{loggedINUser:userName,setuserName}}>
<Header/>
<Outlet/>
</UserContext.Provider>

</div>
</Provider>
);
};



const appRouter= createBrowserRouter([
{
path:"/",
element:<AppLayout/>,
children:[
    {
        path:"/",
        element:<Body/>, 
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>
    }, 
    {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
    },
    {
        path:"/restaurants/:resid",
        element:<RestaurantMenu/>,
        errorElement:<Error/>,
    }
],
errorElement:<Error/>,
},
])
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);