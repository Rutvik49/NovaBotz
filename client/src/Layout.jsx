import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Loader from "./components/Loader";
import PhoneNavigator from "./components/PhoneNavigator";
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    {/* <Loader/> */}
    <Outlet />
    <Footer />
    <PhoneNavigator />
    </>
  )
}

export default Layout