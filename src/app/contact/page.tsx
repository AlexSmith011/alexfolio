import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactCards } from "@/components/ContactCards";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Me"
        description="Reach out via LinkedIn, email, or phone — or download my resume below."
      />

      <ContactCards />
    </>
  );
}
