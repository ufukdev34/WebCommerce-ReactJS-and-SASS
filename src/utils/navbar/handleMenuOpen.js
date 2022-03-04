const handleMenuOpen = () => {
    const responsiveMenuOverlay = document.querySelector('.responsiveMenuOverlay')
    const responsiveMenu = document.querySelector('.responsiveMenu')
    responsiveMenuOverlay.style.display = "flex"
    responsiveMenuOverlay.classList.remove('responsiveMenuOverlayDeactive')
    responsiveMenu.classList.remove('responsiveMenuDeactive')
    responsiveMenuOverlay.classList.add('responsiveMenuOverlayActive')
    responsiveMenu.classList.add('responsiveMenuActive')
    document.querySelector("body").classList.add("removeScrollbar")
}
export default handleMenuOpen