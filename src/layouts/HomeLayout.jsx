import { Outlet } from "react-router-dom"
import HomeHeader from "@/components/layout/home/Header"
import HomeFooter from "@/components/layout/home/Footer"

const HomeLayout = () => {
    return (
        <>
            <HomeHeader />
            <Outlet />
            <HomeFooter />
        </>
    )
}

export default HomeLayout;