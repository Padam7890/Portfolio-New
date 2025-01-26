"use client";
import { menuLists } from "@/constent/Menu";
import { menuItem } from "@/types/homepage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section
      className={`w-full h-auto card-bg mt-9 sticky top-5 p-3 md:p-8 bg-base_black md:bg-[#111111]/30 md:backdrop-blur-md  backdrop-blur-none flex items-center justify-between z-20 ${
        isMenuOpen ? "backdrop-blur-none" : " backdrop-blur-2xl bg-[#111111]/90"
      }`}
    >
      <div className="bg-opacity-20 flex justify-between items-center w-full">
        <div className=" heading-1">Padam</div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white  p-2 rounded-md focus:outline-none"
          >
            <div className="relative">
              {isMenuOpen ? (
                <RxCross1 className="w-6 h-9 transition-all transform scale-100 delay-300" />
              ) : (
                <CiMenuFries className="w-6 h-9 text-white transition-all transform scale-100 delay-300" />
              )}
            </div>
            {/* <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span> */}
          </button>
        </div>
  
        <div className="hidden md:block">
          <ul className="flex text-base_white font-medium uppercase gap-9">
            {menuLists.map((menu: menuItem, index: number) => (
              <li key={index}>
                <Link
                  href={menu.url}
                  passHref
                  className={` btn rounded-full navigation-menu  bg-opacity-5 px-6 py-2 hover:text-white ${
                    pathname === menu.url
                      ? "border white-50 border-[#cccccc3e] rounded-full btn "
                      : "white-70 "
                  }`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className=" bg-[#242323] p-4 rounded-full"> Contact Us</button>
        </div>

      </div>

      <div
        className={`md:hidden  bg-opacity-70 text-white transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col text-left font-medium uppercase gap-9 py-5">
          {menuLists.map((menu: menuItem, index: number) => (
            <li key={index}>
              <Link
                href={menu.url}
                passHref
                className={`navigation-menu  bg-opacity-5 px-6 py-2 hover:text-white ${
                  pathname === menu.url
                    ? "border white-50 border-[#cccccc3e] rounded-full "
                    : "white-70"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
