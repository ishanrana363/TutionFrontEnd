import React from 'react'
import HomeNavbar from '../components/header/HomeNavbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div>
            <HomeNavbar></HomeNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default HomeLayout
