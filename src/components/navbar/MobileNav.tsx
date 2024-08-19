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
      <Drawer modal={false}>
        <DrawerTrigger>
          <Menu className="text-blue-500"/>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center m-2">  More Copy Systems</DrawerTitle>
            <DrawerDescription className="py-5 " >
              <Link href="/" className="cursor-pointer hover:text-blue-500 ">
                Home
              </Link>

              <hr className="border-gray-300 my-4" />

              <Link
                href="#aboutus"
                className="cursor-pointer  hover:text-blue-500 "
              >
                About
              </Link>

              <hr className="border-gray-300 my-4" />

              <Link
                href="#products"
                className="cursor-pointer  hover:text-blue-500 "
              >
                Products
              </Link>

              <hr className="border-gray-300 my-4" />

              <Link
                href="#contact"
                className="cursor-pointer  hover:text-blue-500 "
              >
                Contact
              </Link>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
