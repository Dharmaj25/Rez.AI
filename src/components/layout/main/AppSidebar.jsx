import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupLabel, SidebarRail } from "@/components/ui/sidebar";
import useAuthStore from "@/stores/authStore";
import { LayoutDashboard, FileText, PlusSquare, Palette, Sparkles, ChevronsUpDown, Zap } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const navGroups = [
    {
        label: "Workspace",
        items: [
            { title: "Home", url: "/dashboard", icon: LayoutDashboard },
            { title: "My Resumes", url: "/resumes", icon: FileText },
            { title: "Create Resume", url: "/resume/new", icon: PlusSquare },
        ],
    },
    {
        label: "Design",
        items: [
            { title: "Templates", url: "/templates", icon: Palette },
            { title: "AI Assistant", url: "/assistant", icon: Sparkles },
        ],
    },
];

const AppSidebar = () => {
    const location = useLocation();
    const user = useAuthStore((state) => state.user);

    const isItemActive = (url) =>
        location.pathname === url || location.pathname.startsWith(`${url}/`);

    return (
        <Sidebar collapsible="icon" className="border-r bg-white dark:bg-slate-950">
            {/* Header */}
            <SidebarHeader className="px-2 py-3.5">
                <div className="flex items-center gap-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-500/30">
                        R
                    </div>

                    <div className="overflow-hidden group-data-[collapsible=icon]:hidden">
                        <h1 className="truncate text-[15px] font-semibold leading-tight tracking-tight text-slate-900 dark:text-white">
                            Rez.AI
                        </h1>
                        <p className="truncate text-[11px] leading-tight text-slate-500">
                            AI Resume Builder
                        </p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2 gap-5">
                {navGroups.map((group) => (
                    <SidebarGroup key={group.label} className="px-0">
                        <SidebarGroupLabel className="px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400 group-data-[collapsible=icon]:hidden">
                            {group.label}
                        </SidebarGroupLabel>

                        <SidebarMenu className="gap-0.5 mt-1">
                            {group.items.map((item) => {
                                const active = isItemActive(item.url);

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={active}
                                            tooltip={item.title}
                                            className="relative h-9 rounded-lg px-3 text-[13.5px] text-slate-600 hover:bg-slate-100 hover:text-slate-900 data-[active=true]:bg-blue-50 data-[active=true]:font-medium data-[active=true]:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white dark:data-[active=true]:bg-blue-500/10 dark:data-[active=true]:text-blue-400"
                                        >
                                            <Link to={item.url}>
                                                {/* active accent bar — expanded mode only */}
                                                <span
                                                    className={`absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-blue-600 transition-opacity duration-150 group-data-[collapsible=icon]:hidden ${active ? "opacity-100" : "opacity-0"
                                                        }`}
                                                />
                                                <item.icon size={17} strokeWidth={2} />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            {/* Upgrade card */}
            <div className="mx-2 mb-2 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-3 group-data-[collapsible=icon]:hidden dark:border-blue-500/20 dark:from-blue-500/10 dark:to-transparent">
                <div className="mb-1.5 flex items-center gap-1.5">
                    <Zap size={14} className="fill-blue-500 text-blue-500" />
                    <span className="text-[12.5px] font-semibold text-slate-900 dark:text-white">
                        Upgrade to Pro
                    </span>
                </div>
                <p className="mb-2.5 text-[11.5px] leading-snug text-slate-500">
                    Unlock unlimited AI rewrites and premium templates.
                </p>
                <button className="w-full rounded-lg bg-blue-600 py-1.5 text-[12.5px] font-medium text-white transition-colors hover:bg-blue-700">
                    Upgrade
                </button>
            </div>

            {/* Footer */}
            <SidebarFooter className="border-t px-0">
                <Link
                    to="/settings"
                    className="flex items-center gap-2.5 rounded-lg p-1.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60"
                >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-semibold text-white">
                        {user?.personalDetails?.first_name[0] || "U"}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
                        <span className="truncate text-[13px] font-medium text-slate-900 dark:text-white">
                            {`${user?.personalDetails?.first_name || "User"} ${user?.personalDetails?.last_name || ""}`}
                        </span>
                        <span className="truncate text-[11px] text-slate-500">
                            Free Plan
                        </span>
                    </div>

                    <ChevronsUpDown
                        size={14}
                        className="shrink-0 text-slate-400 group-data-[collapsible=icon]:hidden"
                    />
                </Link>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    );
};

export default AppSidebar;