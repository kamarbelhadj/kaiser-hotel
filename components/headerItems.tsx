import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const items = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Offers", href: "/offers" },
  { label: "Rooms", href: "/rooms" },
];

const HeaderItems = () => {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={cn(pathname === item.href && "text-primary font-semibold")}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default HeaderItems;
