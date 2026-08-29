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
      <Container className="px-6 lg:px-14">
        {/* ========================================
            CTA + ACTION BUTTONS + SOCIALS / LINK GROUPS
            ======================================== */}

        <div className="flex flex-col gap-8 sm:gap-12 border-b border-[#3E3A3A] py-5 sm:py-12 md:py-16 lg:flex-row lg:justify-between lg:py-24">
          {/* Left: CTA heading, action buttons, socials */}
          <div className="flex max-w-full sm:max-w-none lg:w-[45%] xl:w-[42%] flex-col justify-between gap-8 sm:gap-10">
            <div className="space-y-7">
              <h2 className="text-[16px] min-[360px]:text-[18px] min-[400px]:text-[20px] sm:text-[24px] md:text-[26px] lg:text-[26px] 2xl:text-[35px] font-normal uppercase leading-[1.15] tracking-tight text-[#F0F0F0]">
                {Array.isArray(FOOTER_CTA.heading)
                  ? FOOTER_CTA.heading.map((line, idx) => (
                    <span key={idx} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))
                  : FOOTER_CTA.heading}
              </h2>

              {/* Action Buttons with Portfolio Hover Effect */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F0F0F0] text-[#2A2A2A] text-xs font-medium uppercase tracking-normal overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  {/* Animated Background Sweep */}
                  <span className="absolute inset-0 z-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  {/* Content Wrapper */}
                  <span className="relative z-10 flex items-center gap-2.5 text-[#2A2A2A]">
                    <span className="relative overflow-hidden flex h-3 w-3.5 items-center justify-center shrink-0">
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute transition-transform duration-300 ease-out group-hover:translate-x-4">
                        <path d="M10.8536 3.64036L7.35357 0.140356C7.25927 0.0492771 7.13297 -0.00112031 7.00187 1.89012e-05C6.87077 0.00115811 6.74536 0.0537427 6.65266 0.146447C6.55995 0.239151 6.50737 0.364557 6.50623 0.495655C6.50509 0.626754 6.55548 0.753055 6.64656 0.847356L9.29309 3.49386H0.500005C0.367395 3.49386 0.240217 3.54653 0.146448 3.6403C0.0526789 3.73407 0 3.86125 0 3.99386C0 4.12646 0.0526789 4.25364 0.146448 4.34741C0.240217 4.44118 0.367395 4.49386 0.500005 4.49386H9.29309L6.64656 7.14036C6.59881 7.18648 6.56072 7.24165 6.53451 7.30265C6.53451 7.36366 6.49451 7.42927 6.49394 7.49566C6.49336 7.56205 6.50601 7.62788 6.53115 7.68933C6.55629 7.75078 6.59342 7.80661 6.64037 7.85355C6.68731 7.9005 6.74314 7.93763 6.80459 7.96277C6.86604 7.98791 6.93188 8.00056 6.99827 7.99998C7.06466 7.9994 7.13027 7.98561 7.19127 7.95941C7.25227 7.9332 7.30745 7.89511 7.35357 7.84736L10.8536 4.34736C10.9473 4.25359 11 4.12644 11 3.99386C11 3.86127 10.9473 3.73412 10.8536 3.64036Z" fill="#2A2A2A" />
                      </svg>
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute transition-transform duration-300 ease-out -translate-x-4 group-hover:translate-x-0">
                        <path d="M10.8536 3.64036L7.35357 0.140356C7.25927 0.0492771 7.13297 -0.00112031 7.00187 1.89012e-05C6.87077 0.00115811 6.74536 0.0537427 6.65266 0.146447C6.55995 0.239151 6.50737 0.364557 6.50623 0.495655C6.50509 0.626754 6.55548 0.753055 6.64656 0.847356L9.29309 3.49386H0.500005C0.367395 3.49386 0.240217 3.54653 0.146448 3.6403C0.0526789 3.73407 0 3.86125 0 3.99386C0 4.12646 0.0526789 4.25364 0.146448 4.34741C0.240217 4.44118 0.367395 4.49386 0.500005 4.49386H9.29309L6.64656 7.14036C6.59881 7.18648 6.56072 7.24165 6.53451 7.30265C6.53451 7.36366 6.49451 7.42927 6.49394 7.49566C6.49336 7.56205 6.50601 7.62788 6.53115 7.68933C6.55629 7.75078 6.59342 7.80661 6.64037 7.85355C6.68731 7.9005 6.74314 7.93763 6.80459 7.96277C6.86604 7.98791 6.93188 8.00056 6.99827 7.99998C7.06466 7.9994 7.13027 7.98561 7.19127 7.95941C7.25227 7.9332 7.30745 7.89511 7.35357 7.84736L10.8536 4.34736C10.9473 4.25359 11 4.12644 11 3.99386C11 3.86127 10.9473 3.73412 10.8536 3.64036Z" fill="#2A2A2A" />
                      </svg>
                    </span>
                    <span className="text-[#2A2A2A] font-medium">{FOOTER_CTA.emailButtonText}</span>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${FOOTER_CONTACT.phoneNumbers[0]?.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F0F0F0] text-[#2A2A2A] text-xs font-medium uppercase tracking-normal overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  {/* Animated Background Sweep */}
                  <span className="absolute inset-0 z-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  {/* Content Wrapper */}
                  <span className="relative z-10 flex items-center gap-2.5 text-[#2A2A2A]">
                    <span className="relative overflow-hidden flex h-3 w-3.5 items-center justify-center shrink-0">
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute transition-transform duration-300 ease-out group-hover:translate-x-4">
                        <path d="M10.8536 3.64036L7.35357 0.140356C7.25927 0.0492771 7.13297 -0.00112031 7.00187 1.89012e-05C6.87077 0.00115811 6.74536 0.0537427 6.65266 0.146447C6.55995 0.239151 6.50737 0.364557 6.50623 0.495655C6.50509 0.626754 6.55548 0.753055 6.64656 0.847356L9.29309 3.49386H0.500005C0.367395 3.49386 0.240217 3.54653 0.146448 3.6403C0.0526789 3.73407 0 3.86125 0 3.99386C0 4.12646 0.0526789 4.25364 0.146448 4.34741C0.240217 4.44118 0.367395 4.49386 0.500005 4.49386H9.29309L6.64656 7.14036C6.59881 7.18648 6.56072 7.24165 6.53451 7.30265C6.53451 7.36366 6.49451 7.42927 6.49394 7.49566C6.49336 7.56205 6.50601 7.62788 6.53115 7.68933C6.55629 7.75078 6.59342 7.80661 6.64037 7.85355C6.68731 7.9005 6.74314 7.93763 6.80459 7.96277C6.86604 7.98791 6.93188 8.00056 6.99827 7.99998C7.06466 7.9994 7.13027 7.98561 7.19127 7.95941C7.25227 7.9332 7.30745 7.89511 7.35357 7.84736L10.8536 4.34736C10.9473 4.25359 11 4.12644 11 3.99386C11 3.86127 10.9473 3.73412 10.8536 3.64036Z" fill="#2A2A2A" />
                      </svg>
                    </span>
                    <span className="text-[#2A2A2A] font-medium">{FOOTER_CTA.whatsappButtonText}</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Social Links matching 35px Figma circles */}
            <div className="flex items-center gap-3 pt-4">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] transition-opacity hover:opacity-80"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: 2x2 link grid moved slightly to the left with compact intra-group spacing */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-7 sm:grid-cols-2 lg:w-[38%] xl:w-[36%] lg:gap-x-12 lg:gap-y-8 lg:ml-auto lg:-translate-x-4 xl:-translate-x-6">
            <FooterLinkGroup
              title="Quick links"
              links={FOOTER_QUICK_LINKS}
            />

            <FooterLinkGroup
              title="Services"
              links={FOOTER_SERVICES}
            />

            <div>
              <SectionLabel className="text-[#9A9A9A] font-normal text-xs uppercase tracking-normal">
                Business enquiries
              </SectionLabel>

              <div className="mt-1 space-y-2 text-xs sm:text-sm font-normal uppercase tracking-tight text-[#F0F0F0] leading-tight">
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
              <SectionLabel className="text-[#9A9A9A] font-normal text-xs uppercase tracking-normal">
                Location
              </SectionLabel>

              <div className="mt-1 max-w-[240px] text-xs sm:text-sm font-normal uppercase leading-tight tracking-tight text-[#F0F0F0] space-y-3">
                {FOOTER_CONTACT.location.map((loc, idx) => (
                  <span key={idx} className="block space-y-1">
                    {loc.split(',').map((part, pIdx, arr) => (
                      <span key={pIdx} className="block">
                        {part.trim()}{pIdx < arr.length - 1 && ','}
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
            BOTTOM BAR
            ======================================== */}

        <div className="flex flex-row items-center justify-between gap-4 pt-6 pb-1 text-xs uppercase text-[#9A9A9A]">
          <p className="text-xs uppercase">©2026 Fude Studio. All rights reserved.</p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="text-right text-xs uppercase transition-opacity hover:opacity-60 shrink-0 cursor-pointer"
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
        className="hidden md:block w-full text-center select-none whitespace-nowrap text-[16vw] font-medium uppercase leading-none tracking-tight text-[#2D2D2D] -mt-4 lg:-mt-6 translate-y-[20%]"
      >
        Fude Studio
      </div>
    </footer >
  );
}

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <SectionLabel className="text-[#9A9A9A] font-normal text-xs uppercase tracking-normal">
        {title}
      </SectionLabel>

      <nav className="mt-1">
        <ul className="space-y-0.5">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block text-xs sm:text-sm font-normal uppercase tracking-tight text-[#F0F0F0] transition-opacity hover:opacity-60 leading-tight"
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
