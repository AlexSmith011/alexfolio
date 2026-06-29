"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { DetailModal } from "@/components/DetailModal";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { SkillTags } from "@/components/SkillTags";
import { TabButtons } from "@/components/TabButtons";
import {
  experiences,
  experienceFilterLabels,
  getAllExperiences,
  type ExperienceFilter,
  type ExperienceItem,
} from "@/data/portfolio";
import { sortByDateDesc } from "@/lib/sort";

function NoticeBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-dashed border-primary/40 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary">
      {label}
    </span>
  );
}

function getFilteredExperiences(filter: ExperienceFilter): ExperienceItem[] {
  if (filter === "all") {
    return sortByDateDesc(getAllExperiences());
  }
  return sortByDateDesc(experiences[filter]);
}

export function ExperienceList() {
  const [filter, setFilter] = useState<ExperienceFilter>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items = useMemo(() => getFilteredExperiences(filter), [filter]);
  const selected = selectedIndex !== null ? items[selectedIndex] : null;

  const tabs = (Object.keys(experienceFilterLabels) as ExperienceFilter[]).map(
    (value) => ({ value, label: experienceFilterLabels[value] }),
  );

  const openItem = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1);
  };

  const handleFilterChange = (value: ExperienceFilter) => {
    setFilter(value);
    setSelectedIndex(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <TabButtons tabs={tabs} active={filter} onChange={handleFilterChange} />

      <div className="max-h-[calc(100vh-16rem)] overflow-y-auto rounded-xl border border-border bg-card pr-1 card-shadow">
        <ul className="divide-y divide-border">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => openItem(index)}
                className="flex w-full flex-col gap-4 p-5 text-left transition-colors hover:bg-muted/50 sm:flex-row sm:gap-6"
              >
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg border border-border bg-white sm:h-32 sm:w-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      {item.notice && <NoticeBadge label={item.notice} />}
                    </div>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {item.organization}
                    {item.role && (
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        · {item.role}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <SkillTags skills={item.skills} />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <DetailModal
        open={selected !== null}
        onClose={closeModal}
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={items.length > 1}
        hasNext={items.length > 1}
      >
        {selected && (
          <div className="pr-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <h2 className="font-serif text-2xl font-semibold text-card-foreground">
                  {selected.title}
                </h2>
                {selected.notice && <NoticeBadge label={selected.notice} />}
              </div>
              <span className="text-sm text-muted-foreground">{selected.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">
              {selected.organization}
              {selected.role && (
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · {selected.role}
                </span>
              )}
            </p>

            <div className="mt-6">
              <ImageSlideshow
                images={selected.images}
                alt={selected.title}
                objectFit="contain"
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {selected.longDescription}
            </p>

            <SkillTags skills={selected.skills} />

            {selected.articleUrl && (
              <a
                href={selected.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                {selected.articleLabel ?? "Read article"}
              </a>
            )}
          </div>
        )}
      </DetailModal>
    </div>
  );
}
