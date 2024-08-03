import Image from "next/image";
import logo from "../../../public/logo.jpg";
import MobileNavbar from "./MobileNav";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" w-full px-9 lg:px-24 ">
      <div className="flex items-center justify-between ">
        <a href="/">
          <Image src={logo} alt="logo" width={120} />
        </a>
        <div className=" gap-8 hidden md:flex">
          <a href="/" className="text-black/80  hover:text-red-700 ">
            Home
          </a>
          <a
            href="#aboutus"
            className="text-black/80  hover:text-red-700 "
          >
            About
          </a>
          <a
            href="#products"
            className="text-black/80  hover:text-red-700 "
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-black/80  hover:text-red-700 "
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <MobileNavbar/>
        </div>
      </div>
    </nav>
  );
}
