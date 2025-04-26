import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigationLinks } from "@/dummy";

import { Menu } from "lucide-react";

const ToggleMenu = () => {
  const items = navigationLinks;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Toggle Menu"
          variant="outline"
          size="sm"
          className="aspect-square p-2 hover:border-accent-foreground hover:bg-accent-foreground"
        >
          <Menu className="h-5 w-5 text-primary-foreground hover:text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full bg-transparent p-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
          <div className="m-2 flex flex-col items-center rounded-lg border bg-white px-4 pb-16 pt-16">
            {/* # */}
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <SheetClose key={item.id} asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        className:
                          "rounded-full px-4 text-base font-semibold text-primary-foreground hover:bg-accent-foreground hover:text-white",
                      })
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* # */}
            <SheetClose asChild>
              <Link
                href="/"
                aria-label="Convert Pulsa Sekarang!"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    className:
                      "mt-8 rounded-full bg-accent-foreground text-white",
                  })
                )}
              >
                Convert Pulsa Sekarang!
              </Link>
            </SheetClose>
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleMenu;
