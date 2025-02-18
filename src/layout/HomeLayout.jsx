import React from 'react'
import HomeNavbar from '../components/header/HomeNavbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import StickyNavbar from '../components/header/StickyNavbar'

const HomeLayout = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <HomeNavbar></HomeNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default HomeLayout
