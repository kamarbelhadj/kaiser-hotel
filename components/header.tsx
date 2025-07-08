"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import HeaderItems from "./headerItems";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/logo-2.png"
                alt="logo"
                width={47}
                height={47}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <HeaderItems />
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/book"
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <nav className="px-4 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                <HeaderItems />
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/book"
                  className="block w-full px-4 py-3 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
