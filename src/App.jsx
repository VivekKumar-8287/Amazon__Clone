import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { onAuthStateChanged } from "firebase/auth";



const router = createBrowserRouter([
  {
    path:"/",
    element:  <Layout />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      }
    ]

  },{
    path:"/login",
    element: <Login/>
  }
])



// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path="/" element={<Layout />}>
//       <Route path="/login" element={<h1>Login Page</h1>} />
//       <Route path="" element={<Home />} />
//       <Route path="/checkout" element={<Checkout />} />
//     </Route>
//   )
// );

function App() {


  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      console.log('THIS IS USER :>>>', user)
      if (user) {
        // User is signed in
        dispatch({
          type: 'SET_USER',
          user: user
        })
      
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
  },[])

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
