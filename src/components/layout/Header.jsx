import { Button } from "../ui/button";
import { ArrowRight, FileUser, HandCoins, LayoutPanelTop, Smile, Zap, Phone } from "lucide-react";

export default function Header() {
    const navItems = [
        {
            title: "Features",
            icon: Zap,
            link: "/features",
        },
        {
            title: "About Us",
            icon: Smile,
            link: "/about",
        },
        {
            title: "Templates",
            icon: LayoutPanelTop,
            link: "/templates",
        },
        {
            title: "Pricing",
            icon: HandCoins,
            link: "/pricing",
        },
        {
            title: "Contact",
            icon: Phone,
            link: "/contact",
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-3/5 mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-full mt-3 animate-drop-custom">
            <div className="flex items-center gap-2 justify-between py-4 px-8">
                
                {/* Logo :: start*/}
                <div className="flex gap-2 items-center">
                    <div className="bg-blue-600 p-1 rounded-md">
                        <FileUser className="text-white w-6 h-6" />
                    </div>
                    <p className="text-xl font-bold text-gray-700">Rez.AI</p>
                </div>
                {/* Logo :: end*/}

                {/* Nav Links :: start*/}
                <nav className="flex gap-4 text-gray-700 font-medium">
                    {navItems.map(({ title, icon: Icon, link }) => (
                        <a
                            key={title}
                            href={link}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-blue-100/50 hover:text-blue-500"
                        >
                            <Icon className="w-4 h-4" /> {title}
                        </a>
                    ))}
                </nav>
                {/* Nav Links :: end*/}

                {/* CTA Button :: start */}
                <Button className="rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                </Button>
                {/* CTA Button :: end */}
                
            </div>
        </header>
    );
}
