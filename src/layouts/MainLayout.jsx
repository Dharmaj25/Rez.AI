import { Outlet } from "react-router-dom"
import { MainHeader } from "@/components/layout/main/Header"
import { MainFooter } from "@/components/layout/main/Footer"

const MainLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <MainFooter />
        </>
    )
}

export default MainLayout;