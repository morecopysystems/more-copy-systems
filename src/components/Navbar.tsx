import Image from "next/image";
import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between ml-28 mr-28">
      <a href="/">
        <Image src={logo} alt="logo" width={130} />
      </a>
      <div className="flex gap-10">
        <a href="/" className="hover:text-green-700 hover:font-semibold">
          Home
        </a>
        <a href="#aboutus" className="hover:text-green-700 hover:font-semibold">
          About
        </a>
        <a
          href="#products"
          className="hover:text-green-700 hover:font-semibold"
        >
          Products
        </a>
        <a href="#contact" className="hover:text-green-700 hover:font-semibold">
          Contact
        </a>
      </div>
    </div>
  );
}
