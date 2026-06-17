import { Mail, Phone, MapPin, } from 'lucide-react';
// import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const footerLinks = [
  { text: "Our Approach (108 Days)", href: "/" },
  { text: "Ajanm Features", href: "/features" },
  { text: "Ajanm Program", href: "/ajanmprogram" },
  { text: "About Us", href: "/aboutus" },
  { text: "Blog & Insights", href: "/blogs" },
];

// const socialLinks = [
//   { icon: FaInstagram, href: "#" },
//   { icon: FaLinkedin, href: "#" },
//   { icon: FaYoutube, href: "#" },
// ];

const legalLinks = [
  { text: "Privacy Policy", href: "./privacy" },
  { text: "Terms of Service", href: "./t&c" },
  { text: "Refund Policy", href: "./rf" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f5f0] text-[#222] mt-16">

      {/* TOP */}
      <div className="w-full px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 border-b border-gray-200">

        {/* BRAND */}
        <div className="flex flex-col gap-5">
          <h1 className="brand font-extrabold tracking-wide text-left">
            AJANM
          </h1>

          <p className="para leading-7 text-gray-600 text-left">
            Ancient wisdom meets modern wellness. Personalized healing,
            sustainable habits, and AI-driven guidance for your journey.
          </p>
        </div>

        {/* LINKS */}
        <div className="ql">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-left">
              Quick Links
            </h2>
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex  gap-2 text-sm text-gray-700 hover:icon_color transition">
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-bold text-left">
            Contact
          </h2>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Mail size={18} className="icon_color" />
            <span>Email - <a href="mailto:admin@ajanm.ai" className="hover:underline">admin@ajanm.ai</a></span>
          </div>

          <div className="flex gap-3 text-sm text-gray-700">
            <MapPin className="icon_color shrink-0 mt-1" size={20} />
            <p className="leading-5 text-left">
              BK Vedic Pvt. Ltd. 3, Paneri Upvan,
              Bedla Road, Fatehpura,
              Udaipur, Rajasthan, 313001
            </p>
          </div>

          {/* SOCIALS */}
          {/* <div className="flex gap-4 pt-2">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <a
                  key={index}
                  href={link.href}
                  className="p-2 rounded-full bg-white shadow hover:scale-110 transition"
                >
                  <Icon size={18} className="icon_color" />
                </a>
              );
            })}
          </div> */}
        </div>

        {/* NEWSLETTER */}
        {/* <div className="flex flex-col gap-5 text-left">
          <h2 className="text-lg font-bold">
            Stay Updated
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            Subscribe for wellness tips, insights, and updates.
          </p>

          <div className="joinp flex flex-col sm:flex-row w-full gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="mail flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-xl outline-none justify-center"
            />
            <Link to="/subscribe">
              <button className="joinbutton  px-5 py-3 rounded-xl hover:bg-gray-800 transition whitespace-nowrap">
                Join
              </button>
            </Link>
          </div>
          <Link to="/ajanmapp">
            <button className="joinbutton text-white py-3 rounded-full font-semibold hover:bg-[#3f513c] transition">
              Download App
            </button>
          </Link>
        </div> */}
      </div>

      {/* BOTTOM */}
      <div className="max-w-9xl mx-auto px-6 py-6 w-full text-sm text-gray-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © 2026 AJANM Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-gray-900 transition"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;