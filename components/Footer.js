import React from "react";
import Image from "next/image";
import logo from "../image/Logo.svg";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-Charcoal">
      <div className="flex flex-col md:flex-row maxW mx-auto py-20 bg-Charcoal p-2 space-y-10 md:space-y-0 md:space-x-20">
        <div className="flex flex-col space-y-6">
          <Image src={logo} alt="logo" />

          <div className="flex space-x-5">
            <SocialIcon
              url="https://www.facebook.com/"
              style={{ height: 25, width: 25 }}
              fgColor="transparent"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.youtube.com/"
              style={{ height: 25, width: 25 }}
              fgColor="transparent"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.instagram.com/"
              style={{ height: 25, width: 25 }}
              fgColor="transparent"
              bgColor="white"
            />
          </div>
          <p className="text-sm text-white font-poppins">All Right Reserved 2023</p>
        </div>

        <div className="flex flex-col md:flex-row w-full space-y-10 md:space-y-0  justify-between">
          <div className="flex flex-col space-y-5">
            <h3 className="font-bold font-poppins text-xl md:text-[16px] text-white">
              Our Destination
            </h3>
            <ul>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-lg tracking-wide md:text-[16px] ">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <h3 className="font-bold font-poppins text-xl md:text-[16px] text-white">
              Our Activities
            </h3>
            <ul>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <h3 className="font-bold font-poppins text-xl md:text-[16px] text-white">
              Travel Blogs
            </h3>
            <ul>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <h3 className="font-bold font-poppins text-xl md:text-[16px] text-white">
              About Us
            </h3>
            <ul>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5">
            <h3 className="font-bold font-poppins text-xl md:text-[16px] text-white">
              Contact Us
            </h3>
            <ul>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
              <li className="font-medium font-poppins  text-white">
                <Link href="" className="text-md tracking-wide md:text-[16px]">
                  Link 1
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
