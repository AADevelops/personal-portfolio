import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profile from "@/data/profile";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const contactLinks = [
  {
    icon: faLinkedin,
    label: "LinkedIn",
    sublabel: "Let's connect professionally",
    href: profile.linkedinUrl,
    external: true
  },
  {
    icon: faEnvelope,
    label: "Email",
    sublabel: "Fastest way to reach me",
    href: `mailto:${profile.email}`,
    external: false
  },
  {
    icon: faGithub,
    label: "GitHub",
    sublabel: "See my work",
    href: profile.githubUrl,
    external: true
  }
];

function Contact() {
  useDocumentTitle("Contact");

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-1 font-mono flex flex-col justify-center items-center px-4">
        <div className="flex flex-col items-center gap-8 animate-fade-in w-full max-w-lg">

          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs tracking-widest uppercase text-[#31A0F5]">
              Contact
            </p>
            <h1 className="text-3xl font-semibold text-white">Get in Touch</h1>
            <p className="text-[#B2B2B2] text-sm leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a good conversation.
            </p>
            <p className="text-[#B2B2B2]/70 text-xs">
              I typically respond within 24 hours.
            </p>
          </div>

          <div className="w-8 h-[1px] bg-gray-700 rounded-full" />

          <div className="flex flex-col w-full gap-3">
            {contactLinks.map(({ icon, label, sublabel, href, external }) => (
              <ContactCard
                key={label}
                icon={icon}
                label={label}
                sublabel={sublabel}
                href={href}
                external={external}
              />
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
