
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FileText } from "lucide-react";

const terms = [
    {
        title: "Definitions",
        content: [
            "Ajanm.ai refers to the health and wellness platform, including the mobile application, website, and associated services.",
            "User refers to any individual accessing or using Ajanm.ai.",
            "Services include fitness recommendations, nutrition plans, progress tracking, and all other offerings provided by Ajanm.ai.",
            "Content refers to all text, graphics, images, videos, and materials on the platform.",
        ],
    },
    {
        title: "Acceptance of Terms",
        content: [
            "You are at least 18 years old or have parental/guardian consent.",
            "You have read and understood these Terms and Conditions.",
        ],
    },
    {
        title: "Services Provided",
        content: [
            "Ajanm.ai offers tools for tracking health, fitness, and nutrition.",
            "The platform is not a substitute for professional medical advice.",
            "Recommendations are generated based on user data and results may vary.",
        ],
    },
    {
        title: "Account Registration and Security",
        content: [
            "Provide accurate information when creating an account.",
            "Maintain the confidentiality of your login credentials.",
            "Accounts may be suspended for false information or violations.",
        ],
    },
    {
        title: "User Responsibilities",
        content: [
            "Use the platform only for lawful purposes.",
            "Do not share accounts or access another user's account.",
            "Do not upload harmful or inappropriate content.",
            "Report suspicious activities immediately.",
        ],
    },
    {
        title: "Payment and Subscriptions",
        content: [
            "Certain features may require a paid subscription.",
            "Payments are non-refundable except where required by law.",
        ],
    },
    {
        title: "Data Privacy and Security",
        content: [
            "User data is processed according to our Privacy Policy.",
            "Anonymized data may be used for analytics and service improvement.",
            "No digital system can guarantee absolute security.",
        ],
    },
    {
        title: "Intellectual Property",
        content: [
            "All content, software, trademarks, and logos belong to Ajanm.ai or its licensors.",
            "Users may not copy, modify, or distribute content without permission.",
        ],
    },
    {
        title: "Limitation of Liability",
        content: [
            "Ajanm.ai is not responsible for injuries, losses, or damages resulting from platform use.",
            "We are not responsible for third-party content or advertisements.",
            "Technical interruptions may occur beyond our control.",
        ],
    },
    {
        title: "Modifications to Services",
        content: [
            "Features may be updated, modified, or discontinued without notice.",
            "Significant changes will be communicated through app notifications or email.",
        ],
    },
    {
        title: "Termination",
        content: [
            "Accounts may be suspended for violating these terms.",
            "Users may delete their accounts at any time.",
        ],
    },
    {
        title: "Governing Law and Jurisdiction",
        content: [
            "These terms are governed by the laws of Udaipur, Rajasthan, India.",
            "Disputes shall be resolved in courts located in Udaipur, Rajasthan.",
        ],
    },
    {
        title: "Indemnity",
        content: [
            "Users agree to indemnify and hold harmless Ajanm.ai from claims arising from misuse of the platform.",
            "Users accept full responsibility for decisions and actions based on platform information.",
        ],
    },
    {
        title: "Contact Information",
        content: [
            "Ajanm.ai",
            "B.K. Vedic Pvt. Ltd.",
            "admin@ajanm.ai",
        ],
    },
    {
        title: "Updates to Terms and Conditions",
        content: [
            "These terms may be revised periodically.",
            "Continued use of the platform indicates acceptance of updated terms.",
        ],
    },
];

export default function Terms() {
    return (
        <>
            <Navbar />

            <div className="bg-[#fffaf5] min-h-screen text-gray-800">
                {/* Hero */}
                <section className="Terms_head py-24 px-6 bg-gradient-to-br from-orange-100 via-white to-orange-50 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="cork inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full mb-6">
                            <FileText className="w-4 h-4" />
                            Terms & Conditions
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Terms of Service
                        </h1>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Please read these terms carefully before using Ajanm.ai. By
                            accessing or using our services, you agree to comply with these
                            Terms and Conditions.
                        </p>
                    </div>
                </section>

                {/* Terms Sections */}
                {/* <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-8">
            {terms.map((section, index) => (
              <div
                key={index}
                className="p-8"
              >
                <h2 className="text-2xl font-bold mb-5 ">
                  {index + 1}. {section.title}
                </h2>

                <ul className="space-y-3 text-gray-600 flex flex-col">
                  {section.content.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section> */}
                {/* Terms Sections */}
                <section className="Tnc w-full mx-auto px-6 py-16">
                    <div className="space-y-12">
                        {terms.map((section, index) => (
                            <div
                                key={index}
                                // className="border-b border-orange-100 pb-10"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-black">
                                    {index + 1}. {section.title}
                                </h3>

                                <div className="space-y-4">
                                    {section.content.map((item, i) => (
                                        <p
                                            key={i}
                                            className="text-gray-700 text-lg leading-8"
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}

