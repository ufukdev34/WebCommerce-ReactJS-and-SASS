import React,{useLayoutEffect} from 'react'
import Navbar from '../components/Navbar'
import iphone from '../assets/images/products/iphone.png'
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export default function Cart() {
    useLayoutEffect(()=>{
        window.scrollTo(0,0) 
    },[])
    return (
        <div className="cartPage__wrapper">
            <Navbar/>
            <div className="container">
                <p>Shopping Cart</p>
                <button>Clear Cart</button>
            </div>
            <div className="cartPage__content">
                <div className="container">
                    
                    <div className="cart">
                        <table>
                            <tr>
                                <th className="productTH">PRODUCT</th>
                                <th className="quantityTH">QUANTITY</th>
                                <th className="priceTH">PRICE</th>
                                <th className="buttonsTH"></th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="productCartImage">
                                        <img src={iphone}/>
                                    </div>
                                    <div className="productCartDetails">
                                        <p>Apple Iphone X 64GB</p>
                                        <ul>
                                            <li>
                                                <p>Feature 1:</p>
                                                <span>Text</span>
                                            </li>
                                            <li>
                                                <p>Feature 1:</p>
                                                <span>Text</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="quantityTD">
                                        <button>-</button>
                                            <span>120</span>
                                        <button>+</button>
                                    </div>
                                </td>
                                <td>3500 TL</td>
                                <td><button className="removeFromCartButton">REMOVE</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="productCartImage">
                                        <img src={iphone}/>
                                    </div>
                                    <div className="productCartDetails">
                                        <p>Apple Iphone X 64GB</p>
                                        <ul>
                                            <li>
                                                <p>Feature 1:</p>
                                                <span>Text</span>
                                            </li>
                                            <li>
                                                <p>Feature 1:</p>
                                                <span>Text</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="quantityTD">
                                        <button>-</button>
                                            <span>1</span>
                                        <button>+</button>
                                    </div>
                                </td>
                                <td>12500 TL</td>
                                <td><button className="removeFromCartButton">REMOVE</button></td>
                            </tr>
                        </table>
                        <div className="cartPage__paymentDescription">
                            <div className="cartPage__couponPart">
                                <p>Have a coupon?</p>
                                <div className="cartPage__couponPart__inputWrapper">
                                    <input type="text" placeholder="Coupon Code"></input>
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className="cartPage__paymentDescription__content">
                                <ul>
                                    <li>
                                        <p>Total Price:</p>
                                        <span>12000 TL</span>
                                    </li>
                                    <li>
                                        <p>Discount:</p>
                                        <span>-350 TL</span>
                                    </li>
                                    <li>
                                        <p>Total:</p>
                                        <span><strong>11650 TL</strong></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="cartPage__paymentDescription__buttons">
                                <button><Icon icon={faArrowLeft} className="icon"/>&nbsp;Back</button>
                                <button>Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
