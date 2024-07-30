import Image from "next/image";
import logo from "../../public/logo.png";
import MobileNavbar from "./navbar/MobileNav";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-10 md:px-28 bg-transparent z-10">
      <div className="flex items-center justify-between ">
        <a href="/">
          <Image src={logo} alt="logo" width={130} />
        </a>
        <div className=" gap-8 hidden md:flex">
          <a href="/" className="text-white font-medium hover:text-red-200 ">
            Home
          </a>
          <a
            href="#aboutus"
            className="text-white font-medium hover:text-red-200 "
          >
            About
          </a>
          <a
            href="#products"
            className="text-white font-medium hover:text-red-200 "
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-white font-medium hover:text-red-200 "
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
