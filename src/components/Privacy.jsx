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
      <Navbar />
      <div className="bg-[#fffaf5]  text-gray-800">
        {/* Hero Section */}
        <section className="privacy_head relative overflow-hidden bg-gradient-to-br from-orange-100 via-white to-orange-50 py-24 px-6">
          <div className=" max-w-6xl mx-auto text-center">
            <div className="cork inline-flex items-center gap-2 bg-orange-100 icon_color rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Privacy & Data Protection
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Privacy Policy
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              At <span className="font-semibold icon_color">Ajanm</span>,
              your privacy matters. We are committed to protecting your personal
              data and maintaining transparency in how your information is used.
            </p>

            <div className="mt-8 text-sm text-gray-500">
              Effective Date: 02-01-2025
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="privacy_card px-6 py-20">
          <div className="privacy_c grid md:grid-cols-3 gap-8 justify-items-center">
            {sections.map((item, index) => (
              <div
                key={index}
                className="policy_c w-full max-w-lg bg-white border border-orange-100 rounded-3xl p-8 "
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 icon_color flex items-center justify-center mb-6">
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
          <div className="detail_policy mt-2 p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-8">
              Your Rights & Responsibilities
            </h2>

            <div className="space-y-8 text-gray-600 leading-8 w-full detail_c">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Access & Updates
                </h4>
                <p>
                  You can review and update your personal information anytime
                  through your account settings to maintain accurate health and
                  program data.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Account Deletion
                </h4>
                <p>
                  You may delete your account at any time. Certain information may
                  still be retained where legally required.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Cookies & Tracking
                </h4>
                <p>
                  We use cookies and tracking technologies to improve app
                  performance, analyze usage patterns, and personalize your
                  experience.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Children’s Privacy
                </h4>
                <p>
                  Our services are not intended for users under the age of 18. We
                  do not knowingly collect data from children.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Policy Updates
                </h4>
                <p>
                  This Privacy Policy may be updated periodically. Significant
                  changes will be communicated within the App or through official
                  channels.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
      <Footer />
      <div>
        <h1>Privacy Page Working</h1>
      </div>
    </>
  );
}