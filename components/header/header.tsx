import { NavbarLink } from "./navbar-link";
import NavbarLogo from "./navbar-logo";
import ToggleMenu from "./toggle-menu";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white px-4">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Brand */}
          <NavbarLogo />

          <div className="flex items-center justify-center gap-4">
            {/* Nav Desktop */}
            <div className="hidden md:flex">
              <NavbarLink />
            </div>

            {/* Toggle Menu */}
            <div className="md:hidden">
              <ToggleMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
