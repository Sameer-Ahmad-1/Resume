"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo({ onNavClick }) {
  const navItems = [
    { name: "Features", link: "feature" }, // ✅ fixed
    { name: "About", link: "about" },
    { name: "Sign UP", link: "signup" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Nav */}
        <NavBody className="hidden md:flex justify-between items-center w-full px-4 py-2">
          <NavbarLogo />
          <div className="flex gap-6">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    onNavClick(item.link);
                  }
                }}
                className="text-white font-semibold hover:text-gray-300 transition"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              onClick={() => onNavClick("login")}
            >
              Login
            </NavbarButton>
            <NavbarButton variant="primary">Resume</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav className="md:hidden w-full">
          <MobileNavHeader className="flex items-center justify-between px-4 py-2">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2 space-y-4"
          >
            {navItems.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    onNavClick(item.link);
                  }
                }}
                className="block text-left w-full text-base text-neutral-700 dark:text-neutral-300"
              >
                {item.name}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavClick("login");
                }}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open("/resume.pdf", "_blank");
                }}
                variant="primary"
                className="w-full"
              >
                Resume
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
