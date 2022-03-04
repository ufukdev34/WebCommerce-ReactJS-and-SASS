const fetchProducts = () => {
  fetch('products.json',{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  })
  .then(res=>res.json())
  .then(products=>products)
  .catch(err=>console.log(err))
}
export default fetchProducts