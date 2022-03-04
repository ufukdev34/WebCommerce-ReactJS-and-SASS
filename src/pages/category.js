import React,{useRef,useLayoutEffect,useEffect,useState, useMemo,useCallback} from 'react'
import Navbar from '../components/Navbar'
import ProductsGrid from '../components/ProductsGrid'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faChevronDown,faListUl} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProductsByCategories,fetchCategory } from '../redux/actions'
{/*
    Kategori Sayfasında aynı filtre tarzından birden fazla koyulunca labellar ve htmlforlar karışacak,
    düzeltmesini yap (unique id etc.)


    olmayan kategori uzantılarında ana sayfaya yönlendirsin
*/}
function Category() {
    let {categoryTitle} = useParams()
    const categories = useSelector(state=>state.categories)
    let navigate = useNavigate()
    useLayoutEffect(()=>{
        window.scrollTo(0,0) 
    },[categoryTitle])
    const dispatch = useDispatch()
    let queriedProducts = useSelector(state=>state.queriedProducts)
    useEffect(() => {
        if(categories.filter(category=>category.categoryTitle == categoryTitle).length === 0){
            navigate('/')
        }
        const minPriceInput = document.getElementById("minPriceInput");
        const maxPriceInput = document.getElementById("maxPriceInput");
        const inputs = [minPriceInput,maxPriceInput]
        const invalidChars = ["-","+","e",];
        inputs.map((input)=>{
            input.addEventListener("keydown", function(e) {
                if (invalidChars.includes(e.key)) {
                    e.preventDefault();
                }
            });
        })
    }, [])
    useEffect(() => {
        dispatch(fetchProductsByCategories(categoryTitle))
        dispatch(fetchCategory(categoryTitle))
    }, [categoryTitle])
    const unMemoizedFetchedCategory = useSelector(state=>state.fetchedCategory)
    const fetchedCategory = useMemo(()=>unMemoizedFetchedCategory,[categoryTitle])
    const filtersContent = useRef()
    const handleFiltersToggle = () => {
        document.querySelector(".filtersMenu .fa-chevron-down").classList.toggle("transformIcon")
        let targetClasslist = filtersContent.current.classList
        targetClasslist.toggle("activeContent");
        if(targetClasslist.contains("activeContent")){
            targetClasslist.add("filtersContentExpand")
            targetClasslist.remove("filtersContentShrink")
        }
        else if(!targetClasslist.contains("activeContent")){
            targetClasslist.add("filtersContentShrink")
            targetClasslist.remove("filtersContentExpand")
        }
    }
    function deselectOthers(e) {
        let checkboxes = document.getElementsByName('checkboxForOne')
        checkboxes.forEach((item) => {
          if (item !== e.target) item.checked =  false
        })
    }

    /* const categoryOptions = [category.] */
    return (
        <>
            <Navbar/>
            <div className="container categoryTitle">
                <p>{categoryTitle}&nbsp;<small>{`(${queriedProducts.length})`}</small></p>
            </div>
            <div className="container categoryContainer">
                    
                    <div className="filtersMenu">
                        <header onClick={handleFiltersToggle}>
                            Filters
                            <Icon icon={faChevronDown} className="icon"/>
                            <Icon icon={faListUl} className="icon"/>
                        </header>
                        <div className="filtersMenu__content" ref={filtersContent}>
                            <div>
                                <p>Filter With Checkbox (Multiple Choices)</p>
                                <div className="inputWrapper">
                                    <input type="checkbox" id="1" name="name" value="value"/>
                                    <label htmlFor="1">Label</label>
                                </div>
                                <div className="inputWrapper">
                                    <input type="checkbox" id="2" name="name" value="value"/>
                                    <label htmlFor="2">Label</label>
                                </div>
                                <div className="inputWrapper">
                                    <input type="checkbox" id="3" name="name" value="value"/>
                                    <label htmlFor="3">Label</label>
                                </div>
                            </div>

                            <div>
                                <p>Filter With Checkbox (One Choice)</p> {/* add filters and fix id etc. by using fetchedCategory.categoryOptions*/}
                                <div className="inputWrapper">
                                    <input type="checkbox" id="4" name="checkboxForOne" value="value" onClick={(e)=>deselectOthers(e)}/>
                                    <label htmlFor="4">Label</label>
                                </div>
                                <div className="inputWrapper">
                                    <input type="checkbox" id="5" name="checkboxForOne" value="value" onClick={(e)=>deselectOthers(e)}/>
                                    <label htmlFor="5">Label</label>
                                </div>
                                <div className="inputWrapper">
                                    <input type="checkbox" id="6" name="checkboxForOne" value="value" onClick={(e)=>deselectOthers(e)}/>
                                    <label htmlFor="6">Label</label>
                                </div>
                            </div>
                        
                            <div>
                                <p>Range Filter</p>
                                <div className="inputWrapper priceRangeInput">
                                    <span className="priceRangeInput__wrapper">
                                        <label htmlFor="minPriceInput">Minimum Range:</label>
                                        <span>
                                            <input type="number" placeholder="-" id="minPriceInput"/>
                                        </span>
                                        
                                    </span>

                                    <span className="priceRangeInput__wrapper">
                                        <label htmlFor="maxPriceInput">Maximum Range:</label>
                                        <span>
                                            <input type="number" placeholder="-" id="maxPriceInput"/>
                                        </span>
                                        
                                    </span>
                                </div>
                            </div>

                            <div>
                                <p>Range Filter Currency</p>
                                <div className="inputWrapper priceRangeInput">
                                    <span className="priceRangeInput__wrapper">
                                        <label htmlFor="minPriceInput2">Minimum Range:</label>
                                        <span>
                                            <input type="number" placeholder="-" id="minPriceInput2"/>
                                            <div>$</div>
                                        </span>
                                        
                                    </span>

                                    <span className="priceRangeInput__wrapper">
                                        <label htmlFor="maxPriceInput2">Maximum Range:</label>
                                        <span>
                                            <input type="number" placeholder="-" id="maxPriceInput2"/>
                                            <div>$</div>
                                        </span>
                                        
                                    </span>
                                </div>
                            </div>
                            
                            <div>
                                <button className="searchByFilterButton">SEARCH BY FILTER</button>
                            </div>
                        </div>
                    </div>
                    {
                      <ProductsGrid categoryGrid categoryName={`${categoryTitle}`} content = {queriedProducts} key={Math.random()}/>
                    }
                     
                {/* Lazy loading ekle instersection observer,her seferinde 4 item, sonuncu item ekrandaysa yenilerini fetchle */}
            </div>
        </>
    )/* KATEGORİ SAYFAISNDA F5 ATINCA MAIN ROUTE'A DÖNÜYOR */
}

export default Category
