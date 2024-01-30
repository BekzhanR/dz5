import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {countAction} from "../store/countAction.js";
import {busketAction} from "../store/busketAction.js";
import "../App.css"

const Market = () => {
    const [product,setProduct] = useState([])

    useEffect(() =>{
        const response = async () =>{
            const request = await axios.get("https://dummyjson.com/products?limit=20")
            setProduct(request.data.products)

            }
            response()
        },[]

    )
    const dispatch = useDispatch()
    const handleSubmit = (selectProduct) =>{
        dispatch(countAction())
        dispatch(busketAction({payload:selectProduct}))
    }
    return (
        <div>
            <h1 className="h1">market</h1>
            {product.map((item)=>(
                <div className="block" key={item.id}>
                    <img className="image" src={item.thumbnail} alt="#"/>
                    <h3>{item.title}</h3>
                    <span>{item.discription}</span>
                    <p>{item.price}$</p>
                    <p>star:{item.rating}</p>
                    <p>brand:{item.brand}</p>
                    <p>caterogy:{item.category}</p>
                    <button onClick={()=>handleSubmit(item)}>Buy</button>
                </div>
            ))}
        </div>

    );
};

export default Market;