import Link from "next/link";
import { SidebarNav } from "@/components/SidebarNav";
import { siteConfig } from "@/data/portfolio";

export function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col bg-sidebar text-sidebar-foreground md:fixed md:inset-y-0 md:h-screen md:w-64 md:border-r md:border-sidebar-border">
      <div className="flex min-h-0 flex-1 flex-col gap-8 p-6 md:p-8">
        <Link href="/home" className="group block">
          <span className="block font-serif text-xl font-semibold tracking-tight text-sidebar-foreground transition-colors group-hover:text-sidebar-primary">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block font-serif text-sm font-normal text-sidebar-foreground/70 transition-colors group-hover:text-sidebar-foreground/90">
            ({siteConfig.pronouns})
          </span>
        </Link>

        <SidebarNav />
      </div>
    </aside>
  );
}
