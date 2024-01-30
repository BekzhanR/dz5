import React from 'react';
import {useSelector} from "react-redux";
import "../App.css"

const Busket = () => {
    const added = useSelector(state => state.stateProduct.busket)


    return (
        <div>
            <h1 className="h1">busket</h1>
            {added.map((product)=>(
                <div className="block" key={product.payload.id}>
                    <img className="image" src={product.payload.thumbnail} alt="#"/>
                    <h3>{product.payload.title}</h3>
                    <span>{product.payload.padiscription}</span>
                    <p>{product.payload.price}$</p>
                    <p>star:{product.payload.rating}</p>
                    <p>brand:{product.payload.brand}</p>
                    <p>caterogy:{product.payload.category}</p>
                </div>
            ))}
        </div>

    );
};

export default Busket;