const handleMoreMouseLeave = () => {
  const moreDropdown = document.querySelector('.moreCategoriesDropdown')
  if(moreDropdown){
    moreDropdown.classList.remove("active")
    moreDropdown.classList.add("deactive")
    setTimeout(()=>{
      if(moreDropdown.style.display !== "none"){
        moreDropdown.style.display = "none"
      }
    },200)
  }
}
export default handleMoreMouseLeave