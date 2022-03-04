const handleResizeMenu = () => {
  const responsiveMenuOverlay = document.querySelector('.responsiveMenuOverlay');
  if(window.matchMedia('(min-width:768px)').matches){
    if(responsiveMenuOverlay.style.display !== "none"){
      responsiveMenuOverlay.classList.remove('responsiveMenuOverlayActive')
      responsiveMenuOverlay.classList.add('responsiveMenuOverlayDeactive')
      setTimeout(()=>{
        responsiveMenuOverlay.style.display = "none"
      },200)
    }
  }
}
export default handleResizeMenu