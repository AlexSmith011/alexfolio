"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/certifications", label: "Certifications" },
];

export function SidebarNav() {
  const pathname = usePathname();
  const isContactActive = pathname === "/contact";

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/home" && pathname === "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-sidebar-border pt-4 md:pt-6">
        <Link
          href="/contact"
          className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            isContactActive
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
          }`}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
