const fetchCategories = () => {
    fetch('http://localhost:3000/categories',{
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(categories=>console.log(categories))
    .catch(err=>console.log(err))
}
export default fetchCategories