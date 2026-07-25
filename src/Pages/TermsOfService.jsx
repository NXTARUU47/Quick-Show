import React from "react";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-gray-300 px-5 sm:px-8 md:px-16 lg:px-36 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-400">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">

          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing or using QuickShow, you agree to comply with these Terms of Service. If you do not agree with these terms, please do not use our website or services.",
            },
            {
              title: "2. User Accounts",
              list: [
                "You are responsible for maintaining the security of your account.",
                "Provide accurate and up-to-date information.",
                "Do not share your login credentials with others.",
                "Notify us immediately of any unauthorized account access.",
              ],
            },
            {
              title: "3. Ticket Bookings",
              list: [
                "All bookings are subject to seat availability.",
                "Ticket prices may change without prior notice.",
                "Please verify booking details before confirming payment.",
                "Booking confirmations will be sent to your registered email.",
              ],
            },
            {
              title: "4. Payments",
              content:
                "Payments must be completed through approved payment methods. QuickShow is not responsible for issues caused by third-party payment providers.",
            },
            {
              title: "5. Cancellations & Refunds",
              content:
                "Cancellation and refund policies may vary depending on the cinema or event organizer. Please review the applicable policy before confirming your booking.",
            },
            {
              title: "6. Prohibited Activities",
              list: [
                "Using the platform for unlawful purposes.",
                "Attempting to gain unauthorized access to our systems.",
                "Disrupting or interfering with website functionality.",
                "Copying or redistributing website content without permission.",
              ],
            },
            {
              title: "7. Intellectual Property",
              content:
                "All logos, trademarks, graphics, and website content are the property of QuickShow or their respective owners and are protected by applicable copyright laws.",
            },
            {
              title: "8. Limitation of Liability",
              content:
                "QuickShow is not liable for any indirect, incidental, or consequential damages arising from your use of the platform, including booking delays or third-party service interruptions.",
            },
            {
              title: "9. Termination",
              content:
                "We reserve the right to suspend or terminate your account if you violate these Terms of Service or engage in activities that may harm QuickShow or its users.",
            },
            {
              title: "10. Changes to These Terms",
              content:
                "QuickShow may update these Terms of Service at any time. Continued use of the platform after changes become effective constitutes acceptance of the updated terms.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6 lg:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-gray-400 leading-7 text-sm sm:text-base">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm sm:text-base leading-7">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact Section */}

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8">

            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5">
              Contact Information
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-7">
              If you have any questions about these Terms of Service,
              please contact us using the details below.
            </p>

            <div className="mt-6 space-y-3 text-sm sm:text-base">

              <p>
                <span className="text-white font-medium">
                  Email:
                </span>{" "}
                support@quickshow.com
              </p>

              <p>
                <span className="text-white font-medium">
                  Phone:
                </span>{" "}
                +91 98765 43210
              </p>

              <p>
                <span className="text-white font-medium">
                  Website:
                </span>{" "}
                www.quickshow.com
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TermsOfService;