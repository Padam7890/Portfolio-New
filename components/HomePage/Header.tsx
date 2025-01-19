"use client";
import { menuLists } from "@/constent/Menu";
import { menuItem } from "@/types/homepage";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <section className=" w-full h-auto card-bg mt-9  sticky  top-5  backdrop-blur-md bg-[#111111]/30 ">
        <div className="bg-opacity-20 flex justify-between items-center">
          <div className="logo heading-1">Padam</div>
          <div>
            <ul className="flex text-base_white font-medium uppercase gap-9">
              {menuLists.map((menu: menuItem, index: number) => (
                <li key={index}>
                  <Link
                    href={menu.url}
                    passHref
                    className={` navigation-menu  bg-black bg-opacity-5 px-6 py-2 hover:text-white ${
                      pathname === menu.url
                        ? " border white-50  border-[#cccccc3e] rounded-full bg-opacity-40"
                        : " white-70"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
