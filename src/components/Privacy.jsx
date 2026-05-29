// PrivacyPolicy.jsx
import React from "react";
import "./Features.css"

import {
  ShieldCheck,
  Lock,
  Database,
  Bell,
  Globe,
  UserCheck,
  Mail,
} from "lucide-react";
import Navbar from "./Navbar"
import Footer from "./Footer"

const sections = [
  {
    title: "Information We Collect",
    icon: <Database className="w-6 h-6" />,
    content:
      "We collect health & fitness data, account details, payment information, device information, and usage analytics to provide a personalized wellness experience.",
  },
  {
    title: "How We Use Your Information",
    icon: <UserCheck className="w-6 h-6" />,
    content:
      "Your information helps us personalize programs, improve app functionality, provide customer support, communicate updates, and ensure legal compliance.",
  },
  {
    title: "Data Sharing",
    icon: <ShieldCheck className="w-6 h-6" />,
    content:
      "We never sell your data. Information may only be shared with trusted service providers or when legally required.",
  },
  {
    title: "Data Security",
    icon: <Lock className="w-6 h-6" />,
    content:
      "We use industry-standard security measures and encryption to protect your personal information and app activity.",
  },
  {
    title: "International Transfers",
    icon: <Globe className="w-6 h-6" />,
    content:
      "Your information may be processed in countries with different data protection laws depending on our service infrastructure.",
  },
  {
    title: "In-App Notifications",
    icon: <Bell className="w-6 h-6" />,
    content:
      "We may send important notifications related to updates, reminders, security alerts, and service announcements.",
  },
];

export default function Privacy() {
  return (
    <>
     <Navbar/>
    <div className="bg-[#fffaf5] min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="privacy_head relative overflow-hidden bg-gradient-to-br from-orange-100 via-white to-orange-50 py-24 px-6">
        <div className=" max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Privacy & Data Protection
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Privacy Policy
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-orange-600">Ajanm</span>,
            your privacy matters. We are committed to protecting your personal
            data and maintaining transparency in how your information is used.
          </p>

          <div className="mt-8 text-sm text-gray-500">
            Effective Date: 02-01-2025
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* Main Content */}
      <section className="Privacy_card max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-orange-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>

              <p className="text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Policy */}
        <div className="mt-20 bg-white rounded-3xl shadow-sm border border-orange-100 p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-8">
            Your Rights & Responsibilities
          </h2>

          <div className="space-y-8 text-gray-600 leading-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Access & Updates
              </h3>
              <p>
                You can review and update your personal information anytime
                through your account settings to maintain accurate health and
                program data.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Account Deletion
              </h3>
              <p>
                You may delete your account at any time. Certain information may
                still be retained where legally required.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Cookies & Tracking
              </h3>
              <p>
                We use cookies and tracking technologies to improve app
                performance, analyze usage patterns, and personalize your
                experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Children’s Privacy
              </h3>
              <p>
                Our services are not intended for users under the age of 18. We
                do not knowingly collect data from children.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Policy Updates
              </h3>
              <p>
                This Privacy Policy may be updated periodically. Significant
                changes will be communicated within the App or through official
                channels.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-orange-100 max-w-xl">
                If you have questions regarding this Privacy Policy or your
                personal information, feel free to contact our support team.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5" />
                <span className="font-medium">admin@ajanm.ai</span>
              </div>

              <div className="text-orange-100 text-sm">
                Ajanm.ai <br />
                B.K. Vedic Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>/
    <div>
      <h1>Privacy Page Working</h1>
    </div>
    </>
  );
}