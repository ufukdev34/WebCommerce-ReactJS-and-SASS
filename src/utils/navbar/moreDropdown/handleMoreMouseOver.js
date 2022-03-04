const handleMoreMouseOver = () => {
    const moreDropdown = document.querySelector('.moreCategoriesDropdown')
    if(moreDropdown){
        moreDropdown.classList.remove("deactive")
        moreDropdown.classList.add("active")
        moreDropdown.style.display = "flex" 
    }
}
export default handleMoreMouseOver