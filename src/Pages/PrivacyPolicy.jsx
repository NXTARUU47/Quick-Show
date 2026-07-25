import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300 px-5 sm:px-8 md:px-16 lg:px-36 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-400">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">

          {[
            {
              title: "1. Introduction",
              content:
                "Welcome to QuickShow. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our movie ticket booking platform.",
            },
            {
              title: "2. Information We Collect",
              list: [
                "Name and profile information",
                "Email address used for authentication",
                "Movie booking history",
                "Favorite movies",
                "Browser and device information",
                "Usage analytics",
              ],
            },
            {
              title: "3. How We Use Your Information",
              list: [
                "Provide ticket booking services",
                "Improve user experience",
                "Personalize recommendations",
                "Send booking confirmations",
                "Respond to customer support requests",
              ],
            },
            {
              title: "4. Cookies",
              content:
                "We use cookies to improve website performance, remember user preferences, and enhance your browsing experience.",
            },
            {
              title: "5. Data Security",
              content:
                "We use industry-standard security practices to help protect your personal information from unauthorized access, misuse, or disclosure.",
            },
            {
              title: "6. Third-Party Services",
              content:
                "QuickShow may use trusted third-party services for authentication, analytics, payment processing, and movie information. Each provider has its own privacy policy.",
            },
            {
              title: "7. Your Rights",
              list: [
                "Access your account information",
                "Update your personal details",
                "Delete your account",
                "Opt out of marketing emails",
              ],
            },
            {
              title: "8. Children's Privacy",
              content:
                "QuickShow is not intended for children under the age of 13, and we do not knowingly collect information from children.",
            },
            {
              title: "9. Changes to This Policy",
              content:
                "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the latest revision date.",
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

          {/* Contact Card */}
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8">

            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5">
              Contact Us
            </h2>

            <p className="text-gray-400 leading-7 text-sm sm:text-base">
              If you have any questions regarding this Privacy Policy,
              feel free to contact us.
            </p>

            <div className="mt-6 space-y-3 text-sm sm:text-base">
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                support@quickshow.com
              </p>

              <p>
                <span className="text-white font-medium">Phone:</span>{" "}
                +91 98765 43210
              </p>

              <p>
                <span className="text-white font-medium">Website:</span>{" "}
                www.quickshow.com
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;