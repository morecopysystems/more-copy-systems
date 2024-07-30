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
          <Menu />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center m-2">Navigations</DrawerTitle>
            <DrawerDescription className="py-5">
              <a href="/" className="cursor-pointer hover:text-red-500 ">
                Home
              </a>

              <hr className="border-gray-300 my-4" />

              <a
                href="#aboutus"
                className="cursor-pointer  hover:text-red-500 "
              >
                About
              </a>

              <hr className="border-gray-300 my-4" />

              <a
                href="#products"
                className="cursor-pointer  hover:text-red-500 "
              >
                Products
              </a>

              <hr className="border-gray-300 my-4" />

              <a
                href="#contact"
                className="cursor-pointer  hover:text-red-500 "
              >
                Contacts
              </a>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
