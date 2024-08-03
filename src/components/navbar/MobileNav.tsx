import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";



export default function MobileNavbar() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Menu className="text-blue-500"/>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center m-2">morecopysystems</DrawerTitle>
            <DrawerDescription className="py-5">
              <a href="/" className="cursor-pointer hover:text-blue-500 ">
                Home
              </a>

              <hr className="border-gray-300 my-4" />

              <a
                href="#aboutus"
                className="cursor-pointer  hover:text-blue-500 "
              >
                About
              </a>

              <hr className="border-gray-300 my-4" />

              <a
                href="#products"
                className="cursor-pointer  hover:text-blue-500 "
              >
                Products
              </a>

              <hr className="border-gray-300 my-4" />

              <a
                href="#contact"
                className="cursor-pointer  hover:text-blue-500 "
              >
                Contact
              </a>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
