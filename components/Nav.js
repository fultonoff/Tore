import React, { useState } from "react";
import logo from "../image/Logo.svg";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Nav() {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="relative  ">
      <nav className=" w-full ">
        <div className="navigation  w-full mx-auto flex justify-between items-center maxW">
          <div className="logo py-[21px] cursor-pointer">
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
          </div>

          <ul className="md:flex space-x-[32px] font-semibold text-[14px] font-montserrat hidden">
            <li>
              <Link
                className={
                  router.pathname == "/"
                    ? "border-b-4 py-[26px] border-b-yellow"
                    : "border-b-transparent py-[26px]"
                }
                href="/"
              >
                Hem
              </Link>
            </li>

            <li>
              <Link
                className={
                  router.pathname == "/tourism" ||
                  router.pathname === "/tourism/[id]"
                    ? "border-b-4 py-[26px] border-b-yellow"
                    : "border-b-transparent py-[26px]"
                }
                href="/tourism">
                Turism
              </Link>
            </li>

            <li>
              <Link
                className={
                  router.pathname == "/flytta"
                    ? "border-b-4 py-[26px] border-b-yellow"
                    : "border-b-transparent py-[26px]"
                }
                href="/flytta"
              >
                Flytta till Töre
              </Link>
            </li>

            <li>
              <Link
                className={
                  router.pathname == "/belysning"
                    ? "border-b-4 py-[26px] border-b-yellow"
                    : "border-b-transparent py-[26px]"
                }
                href="/belysning"
              >
                Belysning Lakaleden
              </Link>
            </li>

            <li>
              <Link
                className={
                  router.pathname == "/kontakta"
                    ? "border-b-4 py-[26px] border-b-yellow"
                    : "border-b-transparent py-[26px]"
                }
                href="/kontakta"
              >
                Kontakta oss
              </Link>
            </li>
          </ul>
          <div
            className="hamburger w-5 mr-3 cursor-pointer py-[21px] md:hidden"
            onClick={handleClick}
          >
            {!nav ? (
              <BsList className="text-3xl mr-8" />
            ) : (
              <VscChromeClose className="text-3xl" />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}

      <div
        className={
          !nav
            ? "absolute -translate-y-[1000px] duration-700 w-full opacity-0"
            : "mobile-nav absolute bg-white shadow-lg border w-full md:hidden translate-x-0 z-40 duration-700 mr-0 opacity-100"
        }
      >
        <ul
          animate={{ x: 0 }}
          className="flex-col text-right p-10 space-y-10 font-semibold text-3xl font-montserrat justify-center items-center z-40"
        >
          <li className="link border-b border-slate-200 hover:text-Blue duration-200">
            <Link className="" href="/" onClick={handleClick}>
              Hem
            </Link>
          </li>

          <li className="link border-b border-slate-200 hover:text-Blue duration-200">
            <Link className="" href="/tourism" onClick={handleClick}>
              Turism
            </Link>
          </li>

          <li className="link border-b border-slate-200 hover:text-Blue duration-200">
            <Link className="" href="/flytta" onClick={handleClick}>
              Flytta till Töre
            </Link>
          </li>
          <li className="link border-b border-slate-200 hover:text-Blue duration-200">
            <Link className="" href="/belysning" onClick={handleClick}>
              Belysning Lakaleden
            </Link>
          </li>
          <li className="link border-b border-slate-200 hover:text-Blue duration-200">
            <Link className="" href="/kontakta" onClick={handleClick}>
              Kontakta oss
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
