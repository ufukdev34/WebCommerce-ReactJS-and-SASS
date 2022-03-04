import React from 'react'
import PropTypes from 'prop-types';
import {Link,useNavigate} from 'react-router-dom'
export default function ProductGridItem(props) {
    const navigate=useNavigate()
    const {title,description,currentPrice,priceBeforeDiscount,soldOut,productID} = props
    return (
        <div className="productsGrid__item" onClick={()=>navigate(`/product/${productID}`)}>
                    <div className="productsGrid__item__image">
                            {/* <img src={iphone}/> */}
                            {props.children}
                    </div>
                    <div className="productsGrid__item__content">
                    <a>
                        <p>{title}</p>
                    </a>
                        <small>{description}</small>
                        <div className="productsGrid__item__content__price">
                            <span>{currentPrice} USD</span>
                            {priceBeforeDiscount && <span className="oldPrice">{priceBeforeDiscount} USD</span>}
                        </div>
                        {
                            soldOut ?
                            <button disabled>SOLD OUT</button>
                            :
                            <button>ADD TO CART</button> // Ürünün seçenekleri var ise detay sayfasına gider yok ise direkt sepete ekler
                        }
                    </div>
                </div>
    )
}
ProductGridItem.defaultProps = {
    title:"Product Title",
    description:"No Description",
    currentPrice:"Product Price"
};