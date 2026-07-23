import { useState } from "react";
import { useTheme } from "next-themes";
import { Link, useNavigate } from "react-router-dom";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Search,
    Sun,
    Moon,
    ChevronDown,
    UserCircle2,
    CreditCard,
    LogOut,
} from "lucide-react";
import { logout } from "@/services/authService";
import { toast } from "sonner";
import useAuthStore from "@/stores/authStore";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(theme === "dark");

    const user = useAuthStore((state) => state.user);
    const logoutUser = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const toggleTheme = () => {
        const next = isDark ? "light" : "dark";
        setTheme(next);
        setIsDark(!isDark);
    };

    const handleLogout = async () => {
        try {
            await logout();
            logoutUser();
            navigate("/login");
        }
        catch (err) {
            toast.error("Error logging out", {
                description: "Some error occured! Please try again"
            })
        }
    }


    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-4 dark:bg-slate-950">
            {/* Left: sidebar trigger + search */}
            <div className="flex flex-1 items-center gap-3">
                <SidebarTrigger className="text-slate-500 hover:text-slate-900 dark:hover:text-white" />

                <div className="relative w-full max-w-[380px]">
                    <Search
                        size={15}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        placeholder="Search resumes, templates..."
                        className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-14 text-[13.5px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:focus:bg-slate-950"
                    />

                    <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800">
                        ⌘K
                    </kbd>
                </div>
            </div>

            {/* Right: theme toggle + avatar */}
            <div className="flex items-center gap-1.5">
                <button
                    onClick={toggleTheme}
                    className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun size={17} /> : <Moon size={17} />}
                </button>

                <div className="mx-1.5 h-6 w-px bg-slate-200 dark:bg-slate-800" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 rounded-lg py-1 pl-1 pr-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                            <Avatar className="size-7">
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-[11px] font-semibold text-white">
                                    {`${user?.personalDetails?.first_name[0] || "U"}`}
                                </AvatarFallback>
                            </Avatar>

                            <span className="hidden text-[13px] font-medium text-slate-700 sm:inline dark:text-slate-200">
                                {user?.personalDetails?.first_name || "User"}
                            </span>

                            <ChevronDown size={14} className="text-slate-400" />
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[13px] font-medium text-slate-900 dark:text-white">
                                    {`${user?.personalDetails?.first_name || "User"} ${user?.personalDetails?.last_name || ""}`}
                                </span>
                                <span className="truncate text-[11.5px] text-slate-500">
                                    {user?.email || ""}
                                </span>
                            </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link to="/settings" className="cursor-pointer gap-2">
                                <UserCircle2 size={15} className="text-slate-500" />
                                Account settings
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link to="/billing" className="cursor-pointer gap-2">
                                <CreditCard size={15} className="text-slate-500" />
                                Billing
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="cursor-pointer gap-2 text-red-600 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-500/10" onClick={() => handleLogout()}>
                            <LogOut size={15} />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Navbar;