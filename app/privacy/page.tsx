import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Aadithya",
  description: "Learn how Aadithya collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    content: `When you contact us through our website, submit an enquiry form, or communicate with us by phone or email, we may collect:
    
- Your name, email address, and phone number
- Your company name and job title
- Details of your project or service enquiry
- Technical details about your facility (only when provided voluntarily)

We do not collect sensitive personal information and we do not use cookies for tracking or advertising.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information you provide solely to:

- Respond to your enquiry or service request
- Prepare proposals, reports, or quotations
- Communicate about ongoing projects
- Send relevant service updates (only with your consent)

We do not sell, rent, or trade your personal information to any third parties.`,
  },
  {
    title: "Data Storage & Security",
    content: `Your data is stored securely and accessed only by authorised personnel of ${company.name}. We take reasonable technical and organisational measures to protect your information from unauthorised access, disclosure, or loss.

We retain your information only for as long as necessary to fulfil the purpose it was collected for, or as required by applicable law.`,
  },
  {
    title: "Third-Party Services",
    content: `Our website may contain links to third-party websites (e.g. Google Maps). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies independently.

We do not integrate third-party advertising networks or tracking scripts on this website.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:

- Request access to the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your data (subject to legal obligations)
- Withdraw consent for future communications at any time

To exercise any of these rights, please contact us at the details below.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

${company.name}
${company.location}
Email: ${company.email}
Phone: ${company.phone}`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle={`This policy explains how ${company.name} handles your personal information.`}
      />

      <section className="py-16 lg:py-20 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="border-b border-slate-100 pb-10 last:border-0">
                <h2 className="font-display font-bold text-xl text-slate-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
