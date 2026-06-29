"use client";

import Image from "next/image";
import { useState } from "react";
import { DetailModal } from "@/components/DetailModal";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { certificationGroups, type CertificationGroup } from "@/data/portfolio";

export function CertificationList() {
  const groups = certificationGroups;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? groups[selectedIndex] : null;

  const openGroup = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? groups.length - 1 : selectedIndex - 1);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === groups.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="max-h-[calc(100vh-14rem)] overflow-y-auto rounded-xl border border-border bg-card pr-1 card-shadow">
        <ul className="divide-y divide-border">
          {groups.map((group, index) => (
            <li key={group.id}>
              <button
                type="button"
                onClick={() => openGroup(index)}
                className="flex w-full flex-col gap-4 p-5 text-left transition-colors hover:bg-muted/50 sm:flex-row sm:gap-6"
              >
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg border border-border bg-white sm:h-28 sm:w-40">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-semibold text-card-foreground">
                      {group.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{group.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">{group.issuer}</p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {group.certifications.length} certification
                    {group.certifications.length !== 1 ? "s" : ""}
                  </p>
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
        hasPrev={groups.length > 1}
        hasNext={groups.length > 1}
      >
        {selected && <CertificationGroupDetail group={selected} />}
      </DetailModal>
    </div>
  );
}

function CertificationGroupDetail({ group }: { group: CertificationGroup }) {
  return (
    <div className="pr-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-serif text-2xl font-semibold text-card-foreground">
          {group.title}
        </h2>
        <span className="text-sm text-muted-foreground">{group.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-primary">{group.issuer}</p>

      <div className="mt-6">
        <ImageSlideshow images={group.images} alt={group.title} objectFit="contain" />
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        {group.longDescription}
      </p>

      <div className="mt-8">
        <h3 className="text-sm font-medium text-foreground">Certifications</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {group.certifications.map((cert) => (
            <li
              key={cert.id}
              className="flex items-center gap-4 rounded-lg border border-border bg-muted/40 p-4"
            >
              {cert.image && (
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-border bg-white">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="font-medium text-card-foreground">{cert.title}</p>
                <p className="text-sm text-muted-foreground">Issued {cert.date}</p>
                {cert.credentialId && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
