import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CertificationList } from "@/components/CertificationList";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certifications"
        description="Certification groups — click an overview to see credentials, photos, and details."
      />

      <CertificationList />
    </>
  );
}
