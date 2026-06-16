
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FileText } from "lucide-react";

const refund = [
  {
    title: "Refunds/Cancellations Policy",
    content: [
      "At ajanm.ai, a unit of B.K Vedic Pvt Ltd, we strive to provide our customers with the best possible experience. We understand that circumstances may arise where you need to cancel your subscription or request a refund.",
      "Therefore, we have outlined our Refunds/Cancellations Policy to ensure a seamless process for our valued customers.",
    ],
  },
  {
    title: "No Questions Asked Refund",
    content: [
      "We offer a no questions asked refund policy.",
      "If for any reason you are not satisfied with our services, you may request a refund without being required to provide a reason.",
    ],
  },
  {
    title: "Refund Request Window",
    content: [
      "You may request a refund at any time within 14 days from the date of your subscription purchase.",
      "To facilitate your refund, it is necessary to provide your bank account details via email.",
      "Please send the following information: Bank Account Holder Name, Bank Account Number, Bank Name, IFSC Code and Branch Name.",
    ],
  },
  {
    title: "Termination Due to Performance",
    content: [
      "In addition to the 14-day refund window, if we find that you are not performing satisfactorily within the first 14 days of your subscription, we reserve the right to terminate your subscription and initiate a full refund.",
    ],
  },
  {
    title: "Refund Processing Time",
    content: [
      "Upon receiving your refund request, we will process it promptly.",
      "Your refund will be credited to your account within 14 working days.",
    ],
  },
  {
    title: "Termination and Refund Initiation",
    content: [
      "We reserve the right to terminate your subscription and initiate a full refund within the first 14 days if we determine that you are not performing well.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "For any queries or to request a refund, you can reach us at:",
      "Ajanm.ai",
      "B.K. Vedic Pvt. Ltd.",
      "admin@ajanm.ai",
    ],
  },
  {
    title: "Additional Information",
    content: [
      "Please ensure that you provide accurate details while requesting a refund to help us process your request quickly.",
      "We value your feedback and are committed to ensuring your satisfaction with our services.",
      "Thank you for choosing ajanm.ai.",
    ],
  },
];

export default function Refund() {
    return (
        <>
            <Navbar />

            <div className="bg-[#fffaf5]  text-gray-800">
                {/* Hero */}
                <section className="Terms_head py-24 px-6 bg-gradient-to-br from-orange-100 via-white to-orange-50 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="cork inline-flex items-center gap-2 bg-orange-100 icon_color rounded-full mb-6">
                            <FileText className="w-4 h-4" />
                            Refunds & Cancellations
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                           Refunds / Cancellations Policy
                        </h1>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                             Learn about our refund eligibility, cancellation process, and refund timelines.
                        </p>
                    </div>
                </section>

                {/* refund Sections */}
                <section className="Tnc px-6 py-16">
                    <div className="space-y-12">
                        {refund.map((section, index) => (
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
                                            className="text-gray-700 text-lg leading-8 break-words"
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

