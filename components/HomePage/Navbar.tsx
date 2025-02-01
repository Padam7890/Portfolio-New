"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarComponent = () => {
  const path = usePathname();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            href="/"
            className={path === "/" ? "navbar-link active" : "navbar-link"}
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/resume"
            className={
              path === "/Resume" ? "navbar-link active" : "navbar-link"
            }
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/portfolio"
            className={
              path === "/portfolio" ? "navbar-link active" : "navbar-link"
            }
          >
            Portfolio
          </Link>
        </li>

        {/* <li className="navbar-item">
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
          >
            Blog
          </NavLink>
        </li> */}

        <li className="navbar-item">
          <Link
            href="/contact"
            className={
              path === "/contact" ? "navbar-link active" : "navbar-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
