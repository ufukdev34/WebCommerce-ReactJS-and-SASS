import React,{useLayoutEffect} from 'react'
import Navbar from '../components/Navbar'
import SliderComponent from '../components/SliderComponent'
import ProductsGrid from '../components/ProductsGrid'
export default function Home() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0) 
    },[])
    return (
        <div className="wrapper">
            <Navbar/>
            <SliderComponent/>
            {/* newProductsGrid,discountsGrid,categoryGrid,productSearchGrid  --- Grid Types*/}
            <ProductsGrid newProductsGrid/>
            <ProductsGrid discountsGrid/>
            <ProductsGrid categoryGrid/>
            <ProductsGrid productSearchGrid/>
        </div>
    )
}
