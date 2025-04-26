import Image from "next/image";
import Link from "next/link";

import Logo2 from "../../public/logo2.png";

const NavbarLogo = () => {
  return (
    <Link href="/" aria-label="WahyuConvert">
      <Image src={Logo2} alt="WahyuConvert" className="h-10 w-auto" />
    </Link>
  );
};

export default NavbarLogo;
