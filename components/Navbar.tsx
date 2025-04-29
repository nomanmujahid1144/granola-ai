"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../public/assets/logo.svg';
import windows from '../public/assets/hero/windows.svg';
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose
} from "./ui/sheet";

// Navigation items array for better maintainability
const navigationItems = [
    { label: "Pricing", href: "#pricing" },
    { label: "News", href: "#news" },
    { label: "Careers", href: "#careers" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`flex flex-col items-end fixed top-0 inset-x-0 z-50 flex-none p-2 h-14 
                    md:my-2 md:rounded-full border-0 md:border-0.5 backdrop-blur-lg md:top-6 md:left-1/2 
                    md:right-auto md:-translate-x-1/2 text-primary transition-all duration-200
                    ${scrolled ? 'shadow-xl bg-gray-100' : 'md:shadow-sm md:bg-white/60'}
                `}>
            <div className="flex gap-2 justify-between items-center w-full md:gap-px">
                <Link href={'/'} className="flex-shrink-0">
                    <Image
                        src={logo}
                        alt="Granola logo"
                        width={100}
                        height={100}
                        className="mr-3 ml-3 h-7"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center">
                    {navigationItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="select-none px-3 flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-secondary"
                        >
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>


                <div className="flex items-center md:block">
                    <Button className={`select-none flex items-center font-medium transition-all py-1.5 rounded-full 
                            flex-none px-3 ml-1 bg-transparent text-black cursor-pointer 
                            ${scrolled ? 'border-0 hover:bg-button-start shadow-none' : 'border border-black/5 hover:bg-black/5'}
                        `}>
                        <Image
                            src={windows}
                            alt="Windows icon"
                            width={20}
                            height={20}
                            className="flex-none w-4 h-4"
                        />
                        <span>Join Waitlist</span>
                    </Button>

                    {/* Mobile Menu */}
                    <div className="md:hidden ml-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="mr-1">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full p-0 border-none">
                                <SheetHeader className="border-b p-6 flex flex-row justify-between items-center">
                                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                    <Image
                                        src={logo}
                                        alt="Granola logo"
                                        width={100}
                                        height={30}
                                        className="h-7"
                                    />
                                    <SheetClose className="top-60"/>
                                </SheetHeader>

                                <div className="flex flex-col gap-1 p-4 flex-1 justify-center">
                                    {navigationItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="px-6 py-4 text-xl font-medium text-secondary hover:bg-black/5 rounded-xl text-center"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="p-6 border-t">
                                    <Button className="w-full py-6 rounded-xl bg-button-start text-black font-medium text-lg">
                                        <Image
                                            src={windows}
                                            alt="Windows icon"
                                            width={20}
                                            height={20}
                                            className="flex-none mr-2 w-5 h-5"
                                        />
                                        Join the Windows waitlist
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;