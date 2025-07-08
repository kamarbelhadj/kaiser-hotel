import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLink = [
  { label: "About", href: "/" },
  { label: "Stories", href: "/" },
  { label: "Press", href: "/" },
  { label: "Reservation", href: "/" },
];

const legal = [
  { label: "Legal Notice", href: "/" },
  { label: "Cancel reservation", href: "/" },
  { label: "Work With Us", href: "/" },
  { label: "Lost and Found", href: "/" },
];

const support = [
  { label: "FAQ", href: "/" },
  { label: "reservation", href: "/" },
  { label: "hkaiser@planet.tn", href: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo-2.png"
            alt="logo"
            width={60}
            height={60}
            className="mb-6"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Section */}
          <div className="flex flex-col gap-2.5">
            <h1 className="font-bold text-lg mb-2">The company</h1>
            {navLink.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Legal Section */}
          <div className="flex flex-col gap-2.5">
            <h1 className="font-bold text-lg mb-2">Legal</h1>
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-2.5">
            <h1 className="font-bold text-lg mb-2">Support</h1>
            {support.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <p className="text-gray-700 font-medium">+216 73 228 030</p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">Newsletter</h1>
            <input
              type="email"
              placeholder="Enter Your e-mail address"
              className="bg-transparent border-b border-black pb-2 focus:outline-none focus:border-[#646266] transition-colors"
            />
            <button className="rounded-3xl bg-[#646266] text-white py-2 px-4 hover:bg-black transition-colors w-fit">
              Sign Up
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#646266]" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">Trademark and Copyright</p>
              <p className="text-sm text-gray-600">
                2025 H.Kaiser. All Rights Reserved
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600">Find us on:</p>
              <div className="flex gap-3">
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
