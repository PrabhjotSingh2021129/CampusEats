import React, { useEffect } from 'react';
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import  { Toaster } from "react-hot-toast";
import { setDataProduct } from "./redux/productSlide"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';

import './style/tailwind.css';

function App() {
  const dispatch = useDispatch()
  // const productData = useSelector((state)=>state.product)
  
  useEffect(()=>{
    (async()=>{
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
        const resData = await res.json()
       
        dispatch(setDataProduct(resData))
    })()
  },[])

  // console.log(productData)
  return (
    <>
    <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
