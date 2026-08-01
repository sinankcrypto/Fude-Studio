import { motion } from "motion/react";

import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";

import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_CONTACT,
} from "../../constants/footer";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-dark text-text-light"
    >
      {/* ========================================
          CTA + NEWSLETTER
          ======================================== */}

      <Container>
        <div className="border-b border-white/20 py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* CTA */}
            <div>
              <SectionLabel className="text-text-light/60">
                Contact
              </SectionLabel>

              <div className="mt-6">
                <h2 className="max-w-3xl text-5xl font-normal leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  We would love to hear from you.
                </h2>

                <p className="mt-6 text-2xl leading-tight sm:text-3xl">
                  Let's work together.
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <SectionLabel className="text-text-light/60">
                Sign up for our newsletter (No spam)
              </SectionLabel>

              <form
                className="mt-6"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="flex items-end border-b border-white/40">
                  <input
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    className="min-w-0 flex-1 bg-transparent py-4 text-lg text-text-light outline-none placeholder:text-text-light/50"
                  />

                  {/* No visible button in the design — input submits on Enter */}
                  <button type="submit" className="sr-only">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


        {/* ========================================
            FOOTER LINKS
            ======================================== */}

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
          {/* Quick Links */}
          <FooterLinkGroup
            title="Quick Links"
            links={FOOTER_QUICK_LINKS}
          />

          {/* Services */}
          <FooterLinkGroup
            title="Services"
            links={FOOTER_SERVICES}
          />

          {/* Business Enquiries */}
          <div>
            <SectionLabel className="text-text-light/60">
              Business Enquiries
            </SectionLabel>

            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${FOOTER_CONTACT.email}`}
                className="block transition-opacity hover:opacity-60"
              >
                {FOOTER_CONTACT.email}
              </a>

              {FOOTER_CONTACT.phoneNumbers.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block transition-opacity hover:opacity-60"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <SectionLabel className="text-text-light/60">
              Location
            </SectionLabel>

            <p className="mt-6 max-w-xs uppercase leading-relaxed">
              {FOOTER_CONTACT.location}
            </p>
          </div>
        </div>


        {/* ========================================
            BOTTOM BAR
            ======================================== */}

        <div className="flex flex-col gap-6 border-t border-white/20 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            Fude Studio ©2026 Fude Studio. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="text-left uppercase transition-opacity hover:opacity-60 sm:text-right"
          >
            Back to top
          </button>
        </div>
      </Container>
    </footer>
  );
}


function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <SectionLabel className="text-text-light/60">
        {title}
      </SectionLabel>

      <nav className="mt-6">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Footer;