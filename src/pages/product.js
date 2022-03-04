import React,{useLayoutEffect,useState,useEffect,useRef} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import ProductsGrid from '../components/ProductsGrid'
import iphone from '../assets/images/products/iphone.png';
import macbook from '../assets/images/products/macbook.png';
import { fetchProductByID } from '../redux/actions';
import { useSelector,useDispatch } from 'react-redux';
export default function Product() {
    let {productID} = useParams()
    const product = useSelector(state=>state.productByID)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductByID(productID))
    }, [])
    
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [productAmountToAddCart, setProductAmountToAddCart] = useState(1)
    
    const handleProductAmountIncrease = () => {
        setProductAmountToAddCart(productAmountToAddCart+1)
    }

    const handleProductAmountDecrease = () => {
        if(productAmountToAddCart === 1) return
        setProductAmountToAddCart(productAmountToAddCart-1)
    }
    const addNoteSection = useRef("")
    const handleAddToCart = () => {
        product.productOptions.map(option=>{
            /* option.optionID */
            console.log(option.optionTitle + ": " +document.getElementById(`productOption-${option.optionID}`).value)
        })
        console.log("Note: " + addNoteSection.current.value)
        console.log("Quantity: " + productAmountToAddCart)
    }
    return (
        <div className="productsPage">
            {/* {
                (productID == 1 || productID == 2) ? 
                <>
                    <Navbar/>
                    <div>ID:{productID}</div>
                </>
                :
                <h3>404 NOT FOUND</h3> DB'DE OLMAYAN ÜRÜN ID PARAMETRESİ VERİLİRSE ana sayfaya yönlendirilecek
            } */}

            <Navbar/>
            {/* var ise buraya banner componenti çağırılacak */}
            <div className="container">
                <div className="productsPage__content">
                    <p className="responsiveProductTitle productDetails__title">{product?.productTitle}</p>
                    <div className="productsPage__content__leftPart">
                        <div className="productsPage__productImage">
                            {/* <img src="https://source.unsplash.com/random"/> */}
                            {/* <img src={product?.productImages.primaryImage}/> */}
                            <img src={iphone}/>
                            
                        </div>
                            <div className="productsPage__imageChoices">
                                <div className="imageChoiceItem">
                                    <img src={macbook}/>
                                </div>
                                <div className="imageChoiceItem">
                                    <img src="https://source.unsplash.com/random"/>
                                </div>
                                <div className="imageChoiceItem">
                                    <img src="https://source.unsplash.com/random"/>
                                </div>
                                <div className="imageChoiceItem">
                                    <img src="https://source.unsplash.com/random"/>
                                </div>
                            </div>
                    </div>
                    <div className="productsPage__content__rightPart">
                        <p className="productDetails__title">{product?.productTitle}</p>
                        <div className="priceSection">
                                <span className="priceSection__price">{product?.productPrice} USD</span>
                                {
                                    product.productPriceBeforeDiscount &&
                                    <span className="priceSection__priceBeforeDiscount">
                                        {
                                            product.productPriceBeforeDiscount + " " + "USD"
                                        }
                                    </span>
                                }
                        </div>
                        <ul className="productDetails__features">
                        {
                            product.productFeatures && (
                                product.productFeatures.map(feature=>{
                                    return(
                                        <li>
                                            <p>{feature.featureTitle}:</p>
                                            <span>{feature.featureContent}</span>
                                        </li>
                                    )})
                            )
                        }
                        </ul>

                        <div className="productDetails__description">
                            {
                                product?.productDescription
                            }
                        </div>
                            
                        <div className="productDetails__availableOptions">
                            {(product.productOptions && product.productOptions.length !== 0) && <p>Available Options</p>}
                            {
                                product.productOptions &&
                                product.productOptions.map(option=>{
                                    
                                    return(
                                        <div className="productDetails__availableOptionItem">
                                            <label><span>*</span>{option.optionTitle}</label>
                                            <select id={`productOption-${option.optionID}`} name="select1">
                                                {
                                                    option?.optionValues.map(value=>{
                                                        return(
                                                            <option value={value}>{value}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="productDetails__addNoteSection">
                            <label>Add Note</label>
                            <textarea placeholder='Optional' ref={addNoteSection}></textarea>
                        </div>

                        <div className="productDetails__addToCartSection">
                            <div className="addToCartSection__buttonSection">
                                <div className="addToCartSection__amountInput">
                                    <button onClick={handleProductAmountDecrease}>-</button>
                                    <p>{productAmountToAddCart}</p>
                                    <button onClick={handleProductAmountIncrease}>+</button>
                                </div>
                                <button className="addToCartSection__addToCartButton" onClick={handleAddToCart}>ADD TO CART</button>
                                {/* <button className="addToCartSection__addToCartButton" disabled>SOLD OUT</button> */}
                            </div>      
                        </div>
                    </div>
                </div>
                {/* <div className="productsPage__sidebar">
                    <div className="productsPage__sidebar__title">
                        Product ID {productID}
                    </div>
                </div> */}
            </div>
            
            <ProductsGrid categoryGrid categoryName="Related Products" key={Math.random()}/>
        </div>
    )
}
