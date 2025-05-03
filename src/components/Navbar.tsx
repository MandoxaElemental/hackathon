import { Navbar, NavbarBrand} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <div className="sticky top-0 z-40">
    <Navbar fluid rounded className="border-solid border-b-4 border-[#2EC4B6]">
    <NavbarBrand as={Link} href="#">
      <Image src="/assets/kamino.svg" height={70} width={70} className="mr-3 h-20" alt="Kamino"/>
    </NavbarBrand>
    </Navbar>
    </div>
  );
}
