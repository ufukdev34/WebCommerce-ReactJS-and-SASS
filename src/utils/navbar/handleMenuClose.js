const handleMenuClose = () => {
    const responsiveMenuOverlay = document.querySelector('.responsiveMenuOverlay')
    const responsiveMenu = document.querySelector('.responsiveMenu')
    responsiveMenu.classList.remove('responsiveMenuActive')
    responsiveMenu.classList.add('responsiveMenuDeactive')
    responsiveMenuOverlay.classList.add('responsiveMenuOverlayDeactive')
    responsiveMenuOverlay.classList.remove('responsiveMenuOverlayActive')
    document.querySelector("body").classList.remove("removeScrollbar")
    setTimeout(()=>{
      responsiveMenuOverlay.style.display = "none"
    },400)
}
export default handleMenuClose