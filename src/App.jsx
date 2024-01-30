import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Routes,Route} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Market from "./pages/Market.jsx";
import Busket from "./pages/Busket.jsx";
const App = () => {

  return (

    <>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Layout/>}/>
                <Route index element={<Market/>}/>
                <Route path="busket" element={<Busket/>}/>
                <Route path="*" element={<div><h2>404</h2></div>}/>
        </Routes>
    </>
  )
}

export default App
