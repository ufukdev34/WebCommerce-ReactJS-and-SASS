import React from 'react'
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import ProductGridItem from './ProductGridItem';
import iphone from '../assets/images/products/iphone.png';
import macbook from '../assets/images/products/macbook.png';
import PropTypes from 'prop-types';
export default function ProductsGrid(props) {
    const {discountsGrid,newProductsGrid,categoryGrid,productSearchGrid,content}=props //Grid Types
    const {categoryName} = props
    return (
        <div className="productsGrid">
            <div className="productsGrid__title">
                <div className="container">
                    <h3>
                        {
                            newProductsGrid ? "New Products" :
                            discountsGrid ? "Best Discounts" :
                            categoryGrid ? categoryName :
                            productSearchGrid && "Product: Searched Product Name"
                        }
                    </h3>
                    {
                        newProductsGrid &&
                        <select defaultValue="All Categories">
                            <option>All Categories</option>
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                            <option>Category 4</option>
                            <option>Category 5</option>
                        </select> 
                    }
                </div>
            </div>
            <div className="productsGrid__content">
                    {/* <ProductGridItem title="Apple Iphone X 64GB" currentPrice="1500" productID="1">
                        <img src={iphone}/>
                    </ProductGridItem>
                    <ProductGridItem title="Apple Macbook Air 500GB" description={"Description Text About Macbook,Description Text About Macbook,Description Text About Macbook,Description Text About Macbook"} currentPrice="1250" priceBeforeDiscount="1375" soldOut productID="2">
                        <img src={macbook}/>
                    </ProductGridItem> */}
                {/* 
                
                newProductsGrid && (Son Eklenen 6 Ürünü Fetchle,Ürün Yoksa Girdi Sil)
                <>
                    <ProductGridItem title="Apple Iphone X 64GB" description={"Description Text About Iphone"} currentPrice="1500">
                        <img src={iphone}/>
                    </ProductGridItem>
                    <ProductGridItem title="Apple Macbook Air 500GB" description={"Description Text About Macbook"} currentPrice="1250" priceBeforeDiscount="1375" soldOut>
                        <img src={macbook}/>
                    </ProductGridItem>
                </> 

                discountsGrid && (İndirimdeki ürünleri fetchle,Ürün Yoksa Gridi Sil)
                <>
                    <ProductGridItem title="Apple Iphone X 64GB" description={"Description Text About Iphone"} currentPrice="1500">
                        <img src={iphone}/>
                    </ProductGridItem>
                    <ProductGridItem title="Apple Macbook Air 500GB" description={"Description Text About Macbook"} currentPrice="1250" priceBeforeDiscount="1375" soldOut>
                        <img src={macbook}/>
                    </ProductGridItem>
                </> 
                
                categoryGrid && (URL'deki kategoriden olan ürünleri fetchle,Ürün Yoksa Ürün Yok Sayfası Göster)
                <>
                    <ProductGridItem title="Apple Iphone X 64GB" description={"Description Text About Iphone"} currentPrice="1500">
                        <img src={iphone}/>
                    </ProductGridItem>
                    <ProductGridItem title="Apple Macbook Air 500GB" description={"Description Text About Macbook"} currentPrice="1250" priceBeforeDiscount="1375" soldOut>
                        <img src={macbook}/>
                    </ProductGridItem>
                </> 

                productSearchGrid && (Aramaya yazılıp aranan ürüne en yakın ürünleri fetchle,Ürün Yoksa Ürün Yok Sayfası Göster)
                <>
                    <ProductGridItem title="Apple Iphone X 64GB" description={"Description Text About Iphone"} currentPrice="1500">
                        <img src={iphone}/>
                    </ProductGridItem>
                    <ProductGridItem title="Apple Macbook Air 500GB" description={"Description Text About Macbook"} currentPrice="1250" priceBeforeDiscount="1375" soldOut>
                        <img src={macbook}/>
                    </ProductGridItem>
                </> 

                */}

            {
                categoryGrid && 
                <>
                    {
                        content?.map(product => {
                            return(
                                <ProductGridItem productID = {product.productID} title={product.productTitle} description={product.productDescription} currentPrice={product.productPrice} key={Math.random()}>
                                    <img src={iphone}/>
                                </ProductGridItem>
                            )
                        })
                    }
                </> 
            }
            </div>
        </div>
    )
}
ProductsGrid.defaultProps = {
    categoryName:"Category Name"
};