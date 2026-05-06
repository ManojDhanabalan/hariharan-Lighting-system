export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Earthing Audit", href: "/services/earthing-audit" },
      { label: "LPS Adequacy Audit", href: "/services/lps-adequacy-audit" },
      { label: "Power Quality Studies", href: "/services/power-quality" },
      { label: "Power System Studies", href: "/services/power-system-studies" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Earthing System", href: "/solutions/earthing-system" },
      { label: "Lightning System", href: "/solutions/lightning-system" },
      { label: "Ground Design", href: "/solutions/ground-design" },
      { label: "Surge Protection System", href: "/solutions/surge-protection" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
