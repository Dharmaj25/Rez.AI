import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {ArrowRight,FileUser,HandCoins,LayoutPanelTop,Smile,Zap,Menu,X,MessageCircleQuestionMark} from "lucide-react";


const HomeHeader = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const scrollToSection = (id, duration = 2000) => {
        const target = document.getElementById(id);
        if (!target) return;

        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };


    const handleToggleMenu = () => {
        if (mobileMenuVisible) {
            setIsAnimatingOut(true);
            setTimeout(() => {
                setMobileMenuVisible(false);
                setIsAnimatingOut(false);
            }, 300);
        } else {
            setMobileMenuVisible(true);
        }
    };

    const navItems = [
        { title: "Features", icon: Zap, link: "#features" },
        { title: "Templates", icon: LayoutPanelTop, link: "/templates" },
        { title: "Pricing", icon: HandCoins, link: "/pricing" },
        { title: "FAQs", icon: MessageCircleQuestionMark, link: "/about" },
        { title: "About Us", icon: Smile, link: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 sm:w-full xl:w-4/5 xl:mx-auto bg-white/80 backdrop-blur-md shadow-xl xl:rounded-full mt-3 animate-drop-custom">
            <div className="flex items-center gap-2 justify-between py-4 px-8">
                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <div className="bg-blue-500 p-1 rounded-md">
                        <FileUser className="text-white w-6 h-6" />
                    </div>
                    <p className="text-xl font-bold text-gray-700">Rez.AI</p>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-4 text-gray-700 font-medium">
                    {navItems.map(({ title, icon: Icon, link }) => (
                        <a
                            onClick={() => scrollToSection(title.toLowerCase())}
                            key={title}
                            className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-blue-100/50 hover:text-blue-500"
                        >
                            <Icon className="w-4 h-4" /> {title}
                        </a>
                    ))}
                </nav>

                {/* CTA Button (Desktop) */}
                <Button className="hidden lg:flex rounded-xl bg-blue-500 hover:bg-blue-600 items-center gap-2 transition-transform duration-300 hover:scale-105">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                </Button>

                {/* Mobile Menu Toggle */}
                <div
                    onClick={handleToggleMenu}
                    className="p-2 lg:hidden bg-blue-500 hover:bg-blue-600 rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                >
                    {mobileMenuVisible ? <X className="text-white w-5 h-5" /> : <Menu className="text-white w-5 h-5" />}
                </div>
            </div>

            {/* Mobile Menu */}
            {(mobileMenuVisible || isAnimatingOut) && (
                <nav
                    className={`lg:hidden fixed top-20 right-2 left-2 z-40 rounded-2xl bg-white dark:bg-gray-900/80 backdrop-blur-lg border border-blue-100 dark:border-gray-800 shadow-lg p-6 flex flex-col gap-3 origin-top transition-all duration-300 ${mobileMenuVisible && !isAnimatingOut
                        ? "animate-custIn"
                        : "animate-custOut"
                        }`}
                >
                    {navItems.map(({ title, icon: Icon, link }) => (
                        <a
                            key={title}
                            onClick={() => scrollToSection(title.toLowerCase())}
                            className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 font-medium transition-all duration-200 hover:bg-blue-100/60 dark:hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <Icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                            {title}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}

export default HomeHeader;
