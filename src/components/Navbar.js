import React,{useLayoutEffect,useRef,useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faSearch,faShoppingCart,faTimes, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {fetchCategories} from '../redux/actions'
import handleResizeMenu from '../utils/navbar/handleResizeMenu'
import handleMenuOpen from '../utils/navbar/handleMenuOpen'
import handleMenuClose from '../utils/navbar/handleMenuClose'
import handleMoreMouseLeave from '../utils/navbar/moreDropdown/handleMoreMouseLeave'
import handleMoreMouseOver from '../utils/navbar/moreDropdown/handleMoreMouseOver'
export default function Navbar() {
  const dispatch = useDispatch()
  let categories = useSelector(state=>state.categories)
  useEffect(() => {
    dispatch(fetchCategories())
    document.querySelector('.responsiveMenu__content').addEventListener('click',(e)=>{
      if(e.target.nodeName == "LI"){
        handleMenuClose()
      }
    })
    window.addEventListener('resize',handleResizeMenu)
    document.querySelector('html').style.paddingTop = document.querySelector('.navbar').clientHeight + "px"
  }, [])

  useLayoutEffect(()=>{
    handleMenuClose()
    if(moreDropdown.current)
      moreDropdown.current.style.display = "none"
  },[])

  const responsiveMenu = useRef()
  const responsiveMenuOverlay = useRef()
  const moreDropdown= useRef()
  const handleResponsiveMenuClick = (e) => {
    if(e.target.classList.contains("responsiveMenuOverlay")){
      handleMenuClose()
    }
  }
    return (
        <>
          <nav className="navbar">
          <div className="navbar__middle">
              <div className="container">
                <div className="navbar__middle__left__wrapper">
                <Link to="/"><span className="logo">Horizon<span>Commerce</span></span></Link>
                      <div className="searchBox">
                        <input type="search" placeholder="Search Products..."/>
                        <button className="searchButton"><Icon icon={faSearch}/></button>
                      </div>
                  </div>

                <div className="navbar__middle__right">
                  <span>Login</span>
                  <Link to="/cart" className="cartIcon">
                        <Icon icon={faShoppingCart} className="icon"/>
                        <div className="cartCounterText">13</div>
                  </Link>
                </div>
              </div>
          </div>

          <div className="navbar__lower">
                <div className="container">
                  <div className="searchBox">
                      <input type="search" placeholder="Search Products..."/>
                      <button className="searchButton"><Icon icon={faSearch}/></button>
                  </div>
                  <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>About Us</li></Link>
                    {
                      categories.filter((category,index)=>index<3)?.map(category => {
                        return(
                          <Link to={`/category/${category.categoryTitle}`} key={Math.random()}><li className="categoryItem">{category.categoryTitle}</li></Link>
                        )
                      })
                    }
                    {
                      categories.length > 3 &&
                      <li className="moreItem" onMouseOver={handleMoreMouseOver} onMouseLeave={handleMoreMouseLeave}>More<Icon icon={faCaretDown}/>
                        <ul className="moreCategoriesDropdown deactive" ref={moreDropdown}>
                          {
                            categories.filter((category,index)=>index>2)?.map(category => {
                              return(
                                <Link to={`/category/${category.categoryTitle}`} key={Math.random()}><li>{category.categoryTitle}</li></Link>
                              )
                            })  
                          }
                        </ul>
                      </li>
                    }
                  </ul>
                  <span className="responsiveMenuIcon" onClick={handleMenuOpen}>
                    Menu
                    <Icon icon={faCaretDown}/>
                  </span>
                </div>
          </div>
        </nav>
        <div className="responsiveMenuOverlay" ref={responsiveMenuOverlay} onClick={(e)=>handleResponsiveMenuClick(e)}>
          <div className="responsiveMenu" ref={responsiveMenu}>
            <div className="responsiveMenu__title">
              Menu
              <Icon icon={faTimes} className="icon" onClick={handleMenuClose}/>
            </div>
            <div className="responsiveMenu__content">
              <p>Pages</p>
                <ul className="responsiveMenuPagesList">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                </ul>
                <p>Categories</p>
                <ul className="responsiveMenuCategoriesList">
                {
                  categories?.map(category => {
                    return(
                      <Link to={`/category/${category.categoryTitle}`} key={Math.random()}><li className="categoryItem">{category.categoryTitle}</li></Link>
                    )
                  })
                }
                </ul>
            </div>
          </div>
        </div>
        </>
    )
}
