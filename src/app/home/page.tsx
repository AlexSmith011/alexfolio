import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/data/portfolio";
import headshot from "@/assets/alex-smith-headshot.jpg";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const { education } = siteConfig;

  return (
    <>
      <PageHeader title="Home" />

      <section className="flex flex-col gap-10 md:flex-row md:gap-12">
        <div className="relative mx-auto h-72 w-56 shrink-0 overflow-hidden rounded-xl border border-border bg-white card-shadow md:mx-0">
          <Image
            src={headshot}
            alt={`Portrait of ${siteConfig.fullName}`}
            fill
            sizes="(max-width: 768px) 100vw, 224px"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="flex-1">
          <p className="font-serif text-xl text-sidebar md:text-2xl">
            {siteConfig.homeBio.greeting}
          </p>

          <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-foreground md:text-lg">
            {siteConfig.homeBio.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 font-serif text-xl text-sidebar md:text-2xl">
            <p>{siteConfig.homeBio.signoff}</p>
            <p>{siteConfig.homeBio.signoffName}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Education</h2>
        <div className="mt-6 rounded-xl border border-border bg-card p-6 card-shadow">
          <h3 className="font-serif text-lg font-semibold text-card-foreground">
            {education.school}
          </h3>
          {education.location && (
            <p className="mt-1 text-sm text-muted-foreground">{education.location}</p>
          )}

          <div className="mt-6 flex flex-col gap-6">
            {education.degrees.map((degree) => (
              <div
                key={degree.type}
                className="border-t border-border pt-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-medium text-foreground">{degree.label}</p>
                  <p className="text-sm text-muted-foreground">{degree.graduation}</p>
                </div>

                {degree.gpa && (
                  <p className="mt-1 text-sm text-muted-foreground">GPA: {degree.gpa}</p>
                )}

                {degree.majors && degree.majors.length > 0 && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {degree.majors.join(", ")}
                  </p>
                )}

                {degree.additionalMajor && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {degree.additionalMajor}
                  </p>
                )}

                {degree.coursework && degree.coursework.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-foreground">
                      Relevant coursework
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {degree.coursework.join(", ")}.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Skills</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {siteConfig.skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-5 card-shadow"
            >
              <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.skills.join(", ")}.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Honors & Societies
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 card-shadow">
            <h3 className="text-sm font-medium text-foreground">Honors</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.honors.join(", ")}.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 card-shadow">
            <h3 className="text-sm font-medium text-foreground">Societies</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.societies.join(", ")}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
