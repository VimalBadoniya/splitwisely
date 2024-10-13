"use client";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import { HOME_NAVBAR_OPTIONS } from "./Utility/constants/constants";
import Navbar from "./Utility/vishwakarma/Navbar/Navbar";
import Button from "./Utility/vishwakarma/Button/Button";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { useState } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();
  const currentPath = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);

  function onNavbarItemClick(event, navbarItem) {
    event?.preventDefault();
    router.push(navbarItem?.route);
  }
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar
          navbarOptions={HOME_NAVBAR_OPTIONS}
          onItemClick={onNavbarItemClick}
          activePath={currentPath}
        />
        <Button
          label={
            <>
              <PiNewspaperClippingFill />
              <span>Add Expense</span>
            </>
          }
          styleClass="addExpense"
        />
      </body>
    </html>
  );
}
