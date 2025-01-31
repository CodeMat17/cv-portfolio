"use client";

import { motion, type MotionProps } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const MotionH1 = motion.h1 as React.ComponentType<
  MotionProps & React.HTMLAttributes<HTMLHeadingElement>
>;
const MotionDiv = motion.div as React.ComponentType<
  MotionProps & React.HTMLAttributes<HTMLDivElement>
>;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "#aboutMe" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    // { name: "Experience", href: "#experience" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className='sticky top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <MotionH1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='font-bold text-xl text-blue-500'>
              CodeMat
            </MotionH1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className='lg:hidden flex items-center space-x-4'>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 dark:text-gray-300'>
              <Menu className='h-6 w-6' />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </MotionDiv>
        )}
      </div>
    </nav>
  );
}
