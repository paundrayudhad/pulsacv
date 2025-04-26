import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.png";

const NavbarLogo = () => {
  return (
    <Link href="/" aria-label="Viapulsa">
      <Image src={Logo} alt="Viapulsa" className="h-10 w-auto" />
    </Link>
  );
};

export default NavbarLogo;
