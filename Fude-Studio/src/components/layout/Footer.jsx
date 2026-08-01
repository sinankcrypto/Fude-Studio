import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";

import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_CONTACT,
} from "../../constants/footer";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#footer-linkedin-clip)">
          <path d="M13.8896 0H1.10742C0.495117 0 0 0.483399 0 1.08105V13.916C0 14.5137 0.495117 15 1.10742 15H13.8896C14.502 15 15 14.5137 15 13.9189V1.08105C15 0.483399 14.502 0 13.8896 0ZM4.4502 12.7822H2.22363V5.62207H4.4502V12.7822ZM3.33691 4.64648C2.62207 4.64648 2.04492 4.06934 2.04492 3.35742C2.04492 2.64551 2.62207 2.06836 3.33691 2.06836C4.04883 2.06836 4.62598 2.64551 4.62598 3.35742C4.62598 4.06641 4.04883 4.64648 3.33691 4.64648ZM12.7822 12.7822H10.5586V9.30176C10.5586 8.47266 10.5439 7.40332 9.40137 7.40332C8.24414 7.40332 8.06836 8.30859 8.06836 9.24316V12.7822H5.84766V5.62207H7.98047V6.60059H8.00977C8.30566 6.03809 9.03223 5.44336 10.1133 5.44336C12.3662 5.44336 12.7822 6.92578 12.7822 8.85352V12.7822V12.7822Z" fill="#2A2A2A" />
        </g>
        <defs>
          <clipPath id="footer-linkedin-clip">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#footer-instagram-clip)">
          <path d="M7.5 1.35059C9.50391 1.35059 9.74121 1.35937 10.5293 1.39453C11.2617 1.42676 11.6572 1.5498 11.9209 1.65234C12.2695 1.78711 12.5215 1.95117 12.7822 2.21191C13.0459 2.47559 13.207 2.72461 13.3418 3.07324C13.4443 3.33691 13.5674 3.73535 13.5996 4.46484C13.6348 5.25586 13.6436 5.49316 13.6436 7.49414C13.6436 9.49805 13.6348 9.73535 13.5996 10.5234C13.5674 11.2559 13.4443 11.6514 13.3418 11.915C13.207 12.2637 13.043 12.5156 12.7822 12.7764C12.5186 13.04 12.2695 13.2012 11.9209 13.3359C11.6572 13.4385 11.2588 13.5615 10.5293 13.5938C9.73828 13.6289 9.50098 13.6377 7.5 13.6377C5.49609 13.6377 5.25879 13.6289 4.4707 13.5938C3.73828 13.5615 3.34277 13.4385 3.0791 13.3359C2.73047 13.2012 2.47852 13.0371 2.21777 12.7764C1.9541 12.5127 1.79297 12.2637 1.6582 11.915C1.55566 11.6514 1.43262 11.2529 1.40039 10.5234C1.36523 9.73242 1.35645 9.49512 1.35645 7.49414C1.35645 5.49023 1.36523 5.25293 1.40039 4.46484C1.43262 3.73242 1.55566 3.33691 1.6582 3.07324C1.79297 2.72461 1.95703 2.47266 2.21777 2.21191C2.48145 1.94824 2.73047 1.78711 3.0791 1.65234C3.34277 1.5498 3.74121 1.42676 4.4707 1.39453C5.25879 1.35937 5.49609 1.35059 7.5 1.35059ZM7.5 0C5.46387 0 5.20898 0.00878906 4.40918 0.0439453C3.6123 0.0791016 3.06445 0.208008 2.58984 0.392578C2.09473 0.585937 1.67578 0.84082 1.25977 1.25977C0.84082 1.67578 0.585938 2.09473 0.392578 2.58691C0.208008 3.06445 0.0791016 3.60937 0.0439453 4.40625C0.00878906 5.20898 0 5.46387 0 7.5C0 9.53613 0.00878906 9.79102 0.0439453 10.5908C0.0791016 11.3877 0.208008 11.9355 0.392578 12.4102C0.585938 12.9053 0.84082 13.3242 1.25977 13.7402C1.67578 14.1562 2.09473 14.4141 2.58691 14.6045C3.06445 14.7891 3.60938 14.918 4.40625 14.9531C5.20605 14.9883 5.46094 14.9971 7.49707 14.9971C9.5332 14.9971 9.78809 14.9883 10.5879 14.9531C11.3848 14.918 11.9326 14.7891 12.4072 14.6045C12.8994 14.4141 13.3184 14.1562 13.7344 13.7402C14.1504 13.3242 14.4082 12.9053 14.5986 12.4131C14.7832 11.9355 14.9121 11.3906 14.9473 10.5938C14.9824 9.79395 14.9912 9.53906 14.9912 7.50293C14.9912 5.4668 14.9824 5.21191 14.9473 4.41211C14.9121 3.61523 14.7832 3.06738 14.5986 2.59277C14.4141 2.09473 14.1592 1.67578 13.7402 1.25977C13.3242 0.84375 12.9053 0.585938 12.4131 0.395508C11.9355 0.210937 11.3906 0.0820313 10.5938 0.046875C9.79102 0.00878907 9.53613 0 7.5 0Z" fill="#2A2A2A" />
          <path d="M7.5 3.64746C5.37305 3.64746 3.64746 5.37305 3.64746 7.5C3.64746 9.62695 5.37305 11.3525 7.5 11.3525C9.62695 11.3525 11.3525 9.62695 11.3525 7.5C11.3525 5.37305 9.62695 3.64746 7.5 3.64746ZM7.5 9.99902C6.12012 9.99902 5.00098 8.87988 5.00098 7.5C5.00098 6.12012 6.12012 5.00098 7.5 5.00098C8.87988 5.00098 9.99902 6.12012 9.99902 7.5C9.99902 8.87988 8.87988 9.99902 7.5 9.99902Z" fill="#2A2A2A" />
          <path d="M12.4043 3.49512C12.4043 3.99317 12 4.39453 11.5049 4.39453C11.0068 4.39453 10.6055 3.99024 10.6055 3.49512C10.6055 2.99707 11.0098 2.5957 11.5049 2.5957C12 2.5957 12.4043 3 12.4043 3.49512Z" fill="#2A2A2A" />
        </g>
        <defs>
          <clipPath id="footer-instagram-clip">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.07083 7.02136C6.88239 6.63344 7.30604 6.04646 7.30604 5.13282C7.30604 3.33105 5.96364 2.89209 4.41453 2.89209H0.149994V11.9367H4.53447C6.17802 11.9367 7.72203 11.1481 7.72203 9.31058C7.72203 8.1749 7.18354 7.33527 6.07083 7.02136ZM2.13807 4.4361H4.00364C4.72078 4.4361 5.36645 4.63771 5.36645 5.46969C5.36645 6.23787 4.86369 6.54667 4.15421 6.54667H2.13807V4.4361ZM4.26395 10.4003H2.13807V7.90949H4.30479C5.18015 7.90949 5.73395 8.27443 5.73395 9.20084C5.73395 10.1145 5.07296 10.4003 4.26395 10.4003ZM13.4132 4.25745H9.74583V3.36678H13.4132V4.25745ZM14.85 8.75678C14.85 6.81975 13.7169 5.20428 11.6624 5.20428C9.66671 5.20428 8.31156 6.7049 8.31156 8.67001C8.31156 10.7091 9.59525 12.1077 11.6624 12.1077C13.2269 12.1077 14.24 11.4033 14.7275 9.90522H13.1401C12.9691 10.4641 12.2647 10.7602 11.7186 10.7602C10.6646 10.7602 10.1108 10.1426 10.1108 9.09365H14.8347C14.8423 8.98646 14.85 8.87162 14.85 8.75678ZM10.1133 7.96053C10.172 7.10047 10.7437 6.56199 11.6063 6.56199C12.5097 6.56199 12.964 7.09282 13.0406 7.96053H10.1133Z" fill="#2A2A2A" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#footer-x-clip)">
          <path d="M11.8125 0.703125H14.1131L9.08813 6.46125L15 14.2969H10.3716L6.74625 9.54375L2.59781 14.2969H0.29625L5.67094 8.1375L0 0.703125H4.74656L8.02312 5.04656L11.8125 0.703125ZM11.0062 12.9169H12.2813L4.05281 2.01094H2.68594L11.0062 12.9169Z" fill="#2A2A2A" />
        </g>
        <defs>
          <clipPath id="footer-x-clip">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

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
      <Container className="px-6 lg:px-16">
        {/* ========================================
            CTA + NEWSLETTER + SOCIALS / LINK GROUPS
            ======================================== */}

        <div className="flex flex-col gap-16 border-b border-white/20 py-16 lg:flex-row lg:justify-between lg:gap-12 lg:py-24">
          {/* Left: CTA, newsletter, socials */}
          <div className="flex max-w-[449px] flex-col gap-14">
            <h2 className="text-2xl font-normal uppercase leading-[1.1] sm:text-[26px]">
              We would love to hear from you. Let's work together.
            </h2>

            <div>
              <SectionLabel className="text-text-light/60">
                Sign up for our newsletter (No spam)
              </SectionLabel>

              <form
                className="mt-6 flex items-center justify-between gap-4 border-b border-white/40 pb-4"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="min-w-0 flex-1 bg-transparent text-lg text-text-light outline-none placeholder:text-text-light/50"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-text-light/40 transition-colors hover:bg-text-light hover:text-dark"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-light transition-opacity hover:opacity-80"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: link groups */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-16 sm:grid-cols-3 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-24">
            <FooterLinkGroup
              title="Quick Links"
              links={FOOTER_QUICK_LINKS}
            />

            <FooterLinkGroup
              title="Services"
              links={FOOTER_SERVICES}
            />

            <div>
              <SectionLabel className="text-text-light/60">
                Business Enquiries
              </SectionLabel>

              <div className="mt-6 space-y-2">
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="block uppercase transition-opacity hover:opacity-60"
                >
                  {FOOTER_CONTACT.email}
                </a>

                {FOOTER_CONTACT.phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block uppercase transition-opacity hover:opacity-60"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel className="text-text-light/60">
                Location
              </SectionLabel>

              <p className="mt-6 max-w-[158px] uppercase leading-relaxed">
                {FOOTER_CONTACT.location}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================
            BOTTOM BAR
            ======================================== */}

        <div className="flex flex-col gap-6 py-6 text-xs uppercase text-text-light/60 sm:flex-row sm:items-center sm:justify-between">
          <p>©2026 Fude Studio. All rights reserved.</p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="text-left transition-opacity hover:opacity-60 sm:text-right"
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
        className="select-none whitespace-nowrap pb-2 pl-1 text-[16vw] font-medium uppercase leading-none tracking-tight text-[#2D2D2D]"
      >
        Fude Studio
      </div>
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
                className="inline-block uppercase transition-opacity hover:opacity-60"
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
