export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"
export const USER_LOGGED_IN = "USER_LOGGED_IN"
export const USER_LOGGED_OUT = "USER_LOGGED_OUT"

export const IS_LOADING = "IS_LOADING"

export const FETCH_CATEGORIES = "FETCH_CATEGORIES"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const FETCH_PRODUCTS_BY_CATEGORIES = "FETCH_PRODUCTS_BY_CATEGORIES"
export const FETCH_PRODUCT_BY_ID = "FETCH_PRODUCT_BY_ID"
export const FETCH_CATEGORY = "FETCH_CATEGORY"

export const fetchCategories = () => async (dispatch) => {
    fetch('http://192.168.0.19:3000/categories',{
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(categories=>{
        dispatch({type: FETCH_CATEGORIES, payload: categories})
    })
    .catch(err=>console.log(err))
}
export const fetchProducts = () => async (dispatch) => {
    fetch('http://192.168.0.19:3000/products',{
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(categories=>{
        dispatch({type: FETCH_PRODUCTS, payload: categories})
    })
    .catch(err=>console.log(err))
}

//give start end as parameters for query json-server like _limit=10 for lazy loading
export const fetchProductsByCategories = (categoryTitle) => {
    return async (dispatch) => {
        fetch(`http://192.168.0.19:3000/products?productCategoryTitle=${categoryTitle}`,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(products=>{
            dispatch({type: FETCH_PRODUCTS_BY_CATEGORIES, payload: products})
        })
        .catch(err=>console.log(err))
    }
}
export const fetchProductByID = (productID) => {
    return async (dispatch) => {
        fetch(`http://192.168.0.19:3000/products?productID=${productID}`,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(products=>{
            dispatch({type: FETCH_PRODUCT_BY_ID, payload: products[0]})
        })
        .catch(err=>console.log(err))
    }
}

export const fetchCategory = (categoryTitle) => {
    return async (dispatch) => {
        fetch(`http://192.168.0.19:3000/categories/?categoryTitle=${categoryTitle}`,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(category=>{
            dispatch({type: FETCH_CATEGORY, payload: category[0]})
        })
        .catch(err=>console.log(err))
    }
}
// json-server 0.0.0.0 ayarlayıp kendi ip adresin üzerinden fetch at yoksa mobilde çıkmıyor