import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceList } from "@/components/ExperienceList";

export const metadata: Metadata = {
  title: "Experiences",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        title="Experiences"
        description="Internships, clubs, and research — filter by category or view all experiences chronologically."
      />

      <ExperienceList />
    </>
  );
}
