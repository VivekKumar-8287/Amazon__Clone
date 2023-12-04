import React, { useEffect, useState } from 'react'
import Header from './header/Header'
// import Footer from './footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'



function Layout() {

  //Given below is used to hide header on login page

  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current route is the login page
    const isLoginPage = window.location.pathname.includes('/login');
    
    // Update the state to show/hide the header accordingly
    setShowHeader(!isLoginPage);
  }, []);

  return (
    <>
    {showHeader && <Header />}
  
    <Outlet/>
    {/* <Footer/> */}

    </>
  )
}

export default Layout