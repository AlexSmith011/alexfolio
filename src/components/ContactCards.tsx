import { siteConfig } from "@/data/portfolio";

const contactOptions = [
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: siteConfig.linkedin,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Call",
    description: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

const downloadOptions = [
  {
    label: "Resume",
    description: "Download PDF",
    href: siteConfig.resumePdf,
    download: "Alex-Smith-Resume.pdf",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 18H15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0015 4.5h-4.5A2.25 2.25 0 008.25 6.75v11.25A2.25 2.25 0 0010.5 20.25z" />
      </svg>
    ),
  },
  {
    label: "Portfolio",
    description: "Download PDF",
    href: siteConfig.portfolioPdf,
    download: "Alex-Smith-Portfolio.pdf",
    comingSoon: "Coming soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
];

function NoticeBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-dashed border-primary/40 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary">
      {label}
    </span>
  );
}

function DownloadCard({
  label,
  description,
  href,
  icon,
  download,
  comingSoon,
}: {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  download?: string;
  comingSoon?: string;
}) {
  if (comingSoon) {
    return (
      <div
        aria-disabled="true"
        className="flex aspect-square cursor-default flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center card-shadow"
      >
        <span className="text-primary/70">{icon}</span>
        <div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <p className="font-serif text-xl font-semibold text-card-foreground">{label}</p>
            <NoticeBadge label={comingSoon} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      {...(download ? { download } : {})}
      className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-8 text-center transition-colors hover:border-primary hover:bg-muted card-shadow"
    >
      <span className="text-primary transition-colors group-hover:text-accent">{icon}</span>
      <div>
        <p className="font-serif text-xl font-semibold text-card-foreground">{label}</p>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}

function ContactCard({
  label,
  description,
  href,
  icon,
  external,
  download,
}: {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  download?: string;
}) {
  return (
    <a
      href={href}
      {...(download ? { download } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-8 text-center transition-colors hover:border-primary hover:bg-muted card-shadow"
    >
      <span className="text-primary transition-colors group-hover:text-accent">{icon}</span>
      <div>
        <p className="font-serif text-xl font-semibold text-card-foreground">{label}</p>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}

export function ContactCards() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-3">
        {contactOptions.map((option) => (
          <ContactCard key={option.label} {...option} />
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {downloadOptions.map((option) => (
          <DownloadCard key={option.label} {...option} />
        ))}
      </div>
    </div>
  );
}
