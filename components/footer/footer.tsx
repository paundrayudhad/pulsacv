import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/WAHYUCONVERT.png";
import GooglePlay from "../../public/google-play.png";
import AppStore from "../../public/app-store.png";
import { footerLinks, socialLinks } from "@/dummy";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5]">
      {/* Footer Top */}
      <div className="px-4 py-16">
        <div className="container">
          {/* Grud */}
          <div className="flex flex-col gap-10 md:flex-row md:justify-evenly">
            {/* # Col */}
            <div className="flex-1">
              <Link href="/">
                <Image src={Logo} alt="WahyuConvert" className="h-10 w-auto" />
              </Link>
              <address className="mt-4">
                Jl. Semeru No. 4, Pangongangan, Kec. Manguharjo, Kota Madiun,
                Jawa Timur 63121
              </address>
            </div>

            {/* Col */}
            <FooterMenu />

            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t px-4 py-6">
        <div className="container">
          <div className="flex flex-col-reverse items-center gap-4 max-md:text-center md:flex-row md:items-center md:justify-between">
            {/* # Col */}
            <span className="text-sm">
              Copyright © 2022 -{" "}
              <Link href="/">PT. WahyuConvert Global Indonesia</Link>
            </span>

            {/* # Col */}
            <div className="flex items-center justify-center gap-1">
              {socialLinks?.map((item) => (
                <SocialLinks
                  key={item.id}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Components
const FooterMenu = () => {
  return (
    <>
      {footerLinks?.map((item) => (
        <div key={item.id} className="flex-1">
          <h4 className="font-bold text-accent-foreground">{item.title}</h4>

          <ul className="mt-4 flex flex-col space-y-2">
            {item.links?.map((subitem) => (
              <li key={subitem.id}>
                <Link
                  href={subitem.href}
                  aria-label={subitem.label}
                  className="hover:text-accent-foreground"
                >
                  {subitem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

interface SocialLinksProps {
  label: string;
  href: string;
  icon: IconType;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  return (
    <>
      <Link
        href={href}
        aria-label={label}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon", className: "" })
        )}
      >
        <Icon className="h-5 w-5 text-primary-foreground hover:text-accent-foreground" />
      </Link>
    </>
  );
};
