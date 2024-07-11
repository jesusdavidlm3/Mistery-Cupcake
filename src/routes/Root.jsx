import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../../style.scss'
import { useEffect, useState } from "react";

const Root = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/Main')
    }, [])

    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Root;