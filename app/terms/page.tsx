import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aadithya",
  description: "Terms and conditions governing the use of Aadithya's website and engineering services.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.

These terms apply to all visitors, enquirers, and clients of ${company.name}.`,
  },
  {
    title: "Services",
    content: `${company.name} provides professional engineering services including lightning protection audits, earthing system design, surge protection solutions, and related consultancy services.

All services are subject to a separate written agreement or purchase order. Information presented on this website is for general guidance only and does not constitute a binding offer or quotation.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website — including text, graphics, logos, reports, and technical documentation produced by ${company.name} — is the intellectual property of ${company.name} and is protected under applicable copyright law.

You may not reproduce, distribute, or use our content without prior written permission.`,
  },
  {
    title: "Accuracy of Information",
    content: `While we endeavour to keep information on this website accurate and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, or suitability of the information provided.

Any reliance you place on such information is strictly at your own risk. For specific technical requirements, always consult our engineering team directly.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, ${company.name} shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from:

- Use of or reliance on information from this website
- Delays or interruptions to the website
- Actions taken based on enquiries submitted via the contact form

Our liability in connection with any specific engagement is governed by the applicable service agreement.`,
  },
  {
    title: "Third-Party Links",
    content: `This website may include links to external websites for reference. ${company.name} does not endorse or take responsibility for the content of any third-party website. Visiting linked sites is entirely at your own discretion.`,
  },
  {
    title: "Governing Law",
    content: `These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts at Erode, Tamil Nadu.`,
  },
  {
    title: "Changes to These Terms",
    content: `We reserve the right to update these Terms and Conditions at any time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: "Contact",
    content: `For questions about these Terms and Conditions, please contact:

${company.name}
${company.location}
Email: ${company.email}
Phone: ${company.phone}`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle={`Please read these terms carefully before using our website or engaging our services.`}
      />

      <section className="py-16 lg:py-20 bg-white">
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
