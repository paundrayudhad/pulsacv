import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

// Dummy
import { navigationLinks } from "@/dummy";

export const NavbarLink = () => {
  const items = navigationLinks;

  return (
    <nav className="flex items-center justify-center gap-2">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          aria-label={item.label}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                "px-4 font-semibold text-primary-foreground hover:bg-accent-foreground hover:text-white",
            })
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
