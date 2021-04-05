import axios from 'axios'
import './Products.css'

import Loader from "react-loader-spinner";

import { useState, useEffect } from 'react';
import Product from './Product'
const Products = () => {
    const [loader, setLoader] = useState(true)
    const [productsArray, setproductsArray] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/product')
            .then(res => {
                console.log(res.data)
                setproductsArray(res.data);
                setLoader(false)
            })
    }, [])
    if (loader === true) {
        return (
            <Loader
                type="Rings"
                color="#ff3385"
                height={100}
                width={100}
            />
        )
    }
    else {
        return (
            <div className='Products'>
                {
                    productsArray && productsArray.map((product, index) => (
                        <Product index={index} product={product} />
                    ))
                }
            </div>
        )
    }
}

export default Products;