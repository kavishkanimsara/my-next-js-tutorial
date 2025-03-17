"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { DoodleButton } from "./doodle";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   useAuth,
//   UserButton,
//   useClerk,
// } from '@clerk/nextjs';

const Navbar = () => {
  const pathname = usePathname();
  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  //   const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle logout with loading state
  const handleLogout = async () => {
    setLoading(true);
    try {
      // await signOut();
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLoading(false);
    }
  };
  const NavSkeleton = () => (
    <div className="flex items-center space-x-6">
      <div className="h-6 w-16 animate-pulse rounded bg-gray-100"></div>
      <div className="h-6 w-20 animate-pulse rounded bg-gray-100"></div>
    </div>
  );

  // Common navigation items
  const navItems = [
    // ...(isLoaded && userId
    // (true
    //[
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Log out",
      isButton: true,
      onClick: handleLogout,
    },
    // ]
    // : [
    //     { href: '/login', label: 'Login' },
    //     { href: '/signup', label: 'Sign Up', isSpecial: true },
    //   ]),
  ];

  // Common link styles with active state
  const getLinkStyles = (href: string) => {
    const isActive = pathname === href;
    return `transition-colors duration-500 ${isActive ? "font-bold" : ""}`;
  };

  const mobileItemStyles = "block px-3 py-2";

  const NavLink = ({ item, isMobile = false }: any) => {
    if (item.isButton) {
      return (
         <DoodleButton color="green"> {item.label}</DoodleButton>
      );
    }

    return (
      <Link
        href={item.href}
        onClick={() => isMobile && setIsOpen(false)}
        className={` ${getLinkStyles(item.href)} ${
          item.isSpecial
            ? "rounded-[40px] md:bg-[#222ddb] md:px-6 py-3 text-base  md:text-white hover:bg-[#1a22b0]"
            : ""
        } ${isMobile ? mobileItemStyles : ""} `}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="z-20 w-full bg-transparent font-poppins font-semibold text-black shadow-sm transition-all duration-500">
      <div className="bg-[#47A9AA] px-6 pt-3">
        <div>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/dabuLogo.png"
                width={100}
                height={60}
                alt="Dabu Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-6 md:flex">
              {navItems.map((item) => (
                <NavLink key={item.label} item={item} />
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 transition-colors duration-500 hover:text-blue-500 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <NavLink key={item.label} item={item} isMobile={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src="/header.svg" alt="border" className="w-full" />
      </div>
    </nav>
  );
};

export default Navbar;
