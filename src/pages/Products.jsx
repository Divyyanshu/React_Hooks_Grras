import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect} from "react"
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

const Products = ({products,setProducts}) => {
    // //Programatically navigation
        console.log(useContext(ApiContext))
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((data) => {
            setProducts(data.data)
        })
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-10">Products</h1>
            {/* <Link>{JSON.stringify(products)}</Link> */}
            {
                products.map((products) => (
                    <Link to={`/products/${products.id}`} className='text-center font-medium block hover:underline text-lg hover:text-red-500'>{products.title}</Link>
                ))
            }
        </div>
    )
}

export default Products