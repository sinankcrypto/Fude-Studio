import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";

import {
  FOOTER_CTA,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_CONTACT,
  FOOTER_SOCIAL_LINKS,
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
      className="overflow-hidden bg-dark text-text-light"
    >
      <Container className="px-6 lg:px-14 xl:px-20 2xl:px-28 3xl:px-36 4xl:px-44">
        {/* ========================================
            CTA + ACTION BUTTONS + SOCIALS / LINK GROUPS
            ======================================== */}

        <div className="flex flex-col gap-16 border-b border-[#3E3A3A] py-16 lg:flex-row lg:justify-between lg:py-24 xl:py-28 xl:gap-20 2xl:py-32 2xl:gap-24 3xl:py-40 3xl:gap-32 4xl:py-52 4xl:gap-40">
          {/* Left: CTA heading, action buttons, socials */}
          <div className="flex max-w-[450px] lg:max-w-none lg:w-[40%] flex-col justify-between gap-10 xl:gap-14 2xl:gap-18 3xl:gap-24 4xl:gap-32">
            <div className="space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-16 4xl:space-y-20">
              <h2 className="text-2xl font-normal uppercase leading-[1.1] sm:text-[26px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[44px] 4xl:text-[52px] tracking-tighter text-[#F0F0F0]">
                {FOOTER_CTA.heading}
              </h2>

              {/* Action Buttons from Figma */}
              <div className="flex flex-wrap items-center gap-3 pt-2 xl:gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-8">
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="inline-flex items-center gap-2.5 px-4 py-2 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 2xl:rounded-full 3xl:px-8 3xl:py-4 4xl:px-10 4xl:py-5 rounded-full bg-[#F0F0F0] text-[#2A2A2A] text-xs xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] font-medium uppercase tracking-normal hover:bg-white transition-colors"
                >
                  <svg className="w-2.5 h-2 xl:w-3.5 xl:h-2.5 2xl:w-4.5 2xl:h-3 3xl:w-5 3xl:h-4 4xl:w-6 4xl:h-5" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8536 3.64036L7.35357 0.140356C7.25927 0.0492771 7.13297 -0.00112031 7.00187 1.89012e-05C6.87077 0.00115811 6.74536 0.0537427 6.65266 0.146447C6.55995 0.239151 6.50737 0.364557 6.50623 0.495655C6.50509 0.626754 6.55548 0.753055 6.64656 0.847356L9.29309 3.49386H0.500005C0.367395 3.49386 0.240217 3.54653 0.146448 3.6403C0.0526789 3.73407 0 3.86125 0 3.99386C0 4.12646 0.0526789 4.25364 0.146448 4.34741C0.240217 4.44118 0.367395 4.49386 0.500005 4.49386H9.29309L6.64656 7.14036C6.59881 7.18648 6.56072 7.24165 6.53451 7.30265C6.53451 7.36366 6.49451 7.42927 6.49394 7.49566C6.49336 7.56205 6.50601 7.62788 6.53115 7.68933C6.55629 7.75078 6.59342 7.80661 6.64037 7.85355C6.68731 7.9005 6.74314 7.93763 6.80459 7.96277C6.86604 7.98791 6.93188 8.00056 6.99827 7.99998C7.06466 7.9994 7.13027 7.98561 7.19127 7.95941C7.25227 7.9332 7.30745 7.89511 7.35357 7.84736L10.8536 4.34736C10.9473 4.25359 11 4.12644 11 3.99386C11 3.86127 10.9473 3.73412 10.8536 3.64036Z" fill="#2A2A2A"/>
                  </svg>
                  <span className="text-[#2A2A2A] font-medium">{FOOTER_CTA.emailButtonText}</span>
                </a>

                <a
                  href={`https://wa.me/${FOOTER_CONTACT.phoneNumbers[0]?.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 2xl:rounded-full 3xl:px-8 3xl:py-4 4xl:px-10 4xl:py-5 rounded-full bg-[#F0F0F0] text-[#2A2A2A] text-xs xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] font-medium uppercase tracking-normal hover:bg-white transition-colors"
                >
                  <svg className="w-2.5 h-2 xl:w-3.5 xl:h-2.5 2xl:w-4.5 2xl:h-3 3xl:w-5 3xl:h-4 4xl:w-6 4xl:h-5" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8536 3.64036L7.35357 0.140356C7.25927 0.0492771 7.13297 -0.00112031 7.00187 1.89012e-05C6.87077 0.00115811 6.74536 0.0537427 6.65266 0.146447C6.55995 0.239151 6.50737 0.364557 6.50623 0.495655C6.50509 0.626754 6.55548 0.753055 6.64656 0.847356L9.29309 3.49386H0.500005C0.367395 3.49386 0.240217 3.54653 0.146448 3.6403C0.0526789 3.73407 0 3.86125 0 3.99386C0 4.12646 0.0526789 4.25364 0.146448 4.34741C0.240217 4.44118 0.367395 4.49386 0.500005 4.49386H9.29309L6.64656 7.14036C6.59881 7.18648 6.56072 7.24165 6.53451 7.30265C6.53451 7.36366 6.49451 7.42927 6.49394 7.49566C6.49336 7.56205 6.50601 7.62788 6.53115 7.68933C6.55629 7.75078 6.59342 7.80661 6.64037 7.85355C6.68731 7.9005 6.74314 7.93763 6.80459 7.96277C6.86604 7.98791 6.93188 8.00056 6.99827 7.99998C7.06466 7.9994 7.13027 7.98561 7.19127 7.95941C7.25227 7.9332 7.30745 7.89511 7.35357 7.84736L10.8536 4.34736C10.9473 4.25359 11 4.12644 11 3.99386C11 3.86127 10.9473 3.73412 10.8536 3.64036Z" fill="#2A2A2A"/>
                  </svg>
                  <span className="text-[#2A2A2A] font-medium">{FOOTER_CTA.whatsappButtonText}</span>
                </a>
              </div>
            </div>

            {/* Social Links matching 35px Figma circles */}
            <div className="flex items-center gap-3 pt-4 xl:gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-8">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-[35px] w-[35px] xl:h-[42px] xl:w-[42px] 2xl:h-[50px] 2xl:w-[50px] 3xl:h-[60px] 3xl:w-[60px] 4xl:h-[76px] 4xl:w-[76px] shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] transition-opacity hover:opacity-80 [&>svg]:w-[15px] [&>svg]:h-[15px] [&>svg]:xl:w-[18px] [&>svg]:xl:h-[18px] [&>svg]:2xl:w-[22px] [&>svg]:2xl:h-[22px] [&>svg]:3xl:w-[26px] [&>svg]:3xl:h-[26px] [&>svg]:4xl:w-[32px] [&>svg]:4xl:h-[32px]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: 2x2 link grid starting at ~65% width with compact vertical spacing */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-2 lg:w-[35%] lg:gap-x-12 lg:gap-y-8 xl:gap-x-16 xl:gap-y-12 2xl:gap-x-20 2xl:gap-y-16 3xl:gap-x-28 3xl:gap-y-20 4xl:gap-x-36 4xl:gap-y-28 lg:ml-auto">
            <FooterLinkGroup
              title="Quick links"
              links={FOOTER_QUICK_LINKS}
            />

            <FooterLinkGroup
              title="Services"
              links={FOOTER_SERVICES}
            />

            <div>
              <SectionLabel className="text-[#9A9A9A] font-normal text-xs xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] uppercase tracking-normal">
                Business enquiries
              </SectionLabel>

              <div className="mt-3 xl:mt-4 2xl:mt-5 3xl:mt-7 4xl:mt-9 space-y-1 text-xs sm:text-sm xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px] font-normal uppercase tracking-normal text-[#F0F0F0]">
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

            <div>
              <SectionLabel className="text-[#9A9A9A] font-normal text-xs xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] uppercase tracking-normal">
                Location
              </SectionLabel>

              <p className="mt-3 xl:mt-4 2xl:mt-5 3xl:mt-7 4xl:mt-9 max-w-[240px] xl:max-w-[280px] 2xl:max-w-[340px] 3xl:max-w-[420px] 4xl:max-w-[500px] text-xs sm:text-sm xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px] font-normal uppercase leading-normal text-[#F0F0F0]">
                {FOOTER_CONTACT.location}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================
            BOTTOM BAR
            ======================================== */}

        <div className="flex flex-col gap-6 py-6 text-xs xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] uppercase text-[#9A9A9A] sm:flex-row sm:items-center sm:justify-between">
          <p>©2026 Fude Studio. All rights reserved.</p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="text-left transition-opacity hover:opacity-60 sm:text-right cursor-pointer"
          >
            Back to top
          </button>
        </div>
      </Container>

      {/* ========================================
          WATERMARK
          ======================================== */}

      <div
        aria-hidden="true"
        className="select-none whitespace-nowrap pl-1 text-[16vw] font-medium uppercase leading-none tracking-tight text-[#2D2D2D] translate-y-[25%]"
      >
        Fude Studio
      </div>
    </footer>
  );
}


function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <SectionLabel className="text-[#9A9A9A] font-normal text-xs xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] uppercase tracking-normal">
        {title}
      </SectionLabel>

      <nav className="mt-3 xl:mt-4 2xl:mt-5 3xl:mt-7 4xl:mt-9">
        <ul className="space-y-1 xl:space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block text-xs sm:text-sm xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px] font-normal uppercase tracking-normal text-[#F0F0F0] transition-opacity hover:opacity-60"
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

