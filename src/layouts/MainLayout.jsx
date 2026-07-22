import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

import AppSidebar from "@/components/layout/main/AppSidebar";
import Navbar from "@/components/layout/main/Navbar";

const MainLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset className="h-svh overflow-hidden">
                <Navbar />

                <main className="flex-1 min-h-0 overflow-hidden p-6">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default MainLayout;