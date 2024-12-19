import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-900 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:font-extrabold font-bold text-[#2d3748] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is our priority. Please take a moment to review how we
            protect your data.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-base text-gray-700 mb-4 mt-2">
              We collect both personal and non-personal information to enhance
              your experience, assist with bookings, and improve our services.
              The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-[#595d64]">
              <li>
                <strong>Personal Information:</strong> Name, contact details
                (email, phone number), travel preferences, and any details you
                provide when making inquiries or bookings.
              </li>
              <li>
                <strong>Payment Information:</strong> Details for booking and
                payment processing, including billing address and payment method
                (handled securely via third-party processors).
              </li>
              <li>
                <strong>Website Usage Information:</strong> IP addresses,
                browser type, device information, and browsing activity,
                gathered through cookies and other tracking technologies.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-base text-gray-700 mb-4">
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>
                To process and manage your travel bookings, inquiries, and
                requests.
              </li>
              <li>
                To send confirmation emails, reminders, and other communications
                regarding your bookings and services.
              </li>
              <li>
                To personalize your user experience and improve the
                functionality of our website.
              </li>
              <li>
                To provide marketing communications, including offers,
                promotions, and updates (if you have opted in).
              </li>
              <li>
                To analyze trends, optimize website performance, and track
                usage.
              </li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-base text-gray-700 mb-4">
              We use cookies to enhance your browsing experience. Cookies help
              us analyze website usage, remember your preferences, and improve
              functionality.
            </p>
            <p className="text-lg text-gray-700">
              You can manage cookie settings through your browser settings.
              Disabling cookies may affect certain website features and
              services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              4. How We Share Your Information
            </h2>
            <p className="text-base text-gray-700 mb-4">
              We do not sell or rent your personal data. However, we may share
              your information with third parties in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-[#595d64]">
              <li>
                <strong>Service Providers:</strong> Third-party companies that
                provide services on our behalf (e.g., transport providers,
                hotels, payment processors). These third parties are required to
                keep your data confidential.
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may disclose your
                information if required by law, court order, or regulatory
                authority.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a
                merger, acquisition, or asset sale, your data may be transferred
                as part of the transaction.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              5. Data Security
            </h2>
            <p className="text-base text-gray-700 mb-4">
              We implement reasonable measures to protect your personal data
              from unauthorized access, misuse, or loss. However, no method of
              data transmission or storage is 100% secure.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="text-base text-gray-700 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-[#595d64]">
              <li>
                <strong>Access and Correction:</strong> You can access, update,
                or correct your personal information.
              </li>
              <li>
                <strong>Opt-out of Marketing:</strong> You may opt out of
                marketing emails by following the unsubscribe instructions.
              </li>
              <li>
                <strong>Request Deletion:</strong> You can request the deletion
                of your personal data, subject to legal and contractual
                obligations.
              </li>
              <li>
                <strong>Cookie Preferences:</strong> You can manage your cookie
                settings through your browser.
              </li>
            </ul>
            <p className="text-base text-gray-700 mt-4">
              To exercise these rights, please contact us using the details
              provided below.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-base text-gray-700 mb-4">
              Our website may contain links to external sites not operated by
              us. We are not responsible for the privacy practices or content of
              these sites. Please review their privacy policies before
              interacting with them.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-base text-gray-700 mb-4">
              We may update this Privacy Policy at any time. Changes will be
              posted on this page with the "Last Updated" date updated
              accordingly. Please check periodically to stay informed about how
              we protect your information.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="md:text-3xl text-2xl font-semibold text-[#545a64] border-b-2 pb-2 mb-4">
              9. Contact Us
            </h2>
            <p className="text-base text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy,
              feel free to contact us:
            </p>
            <ul className="text-[#595d64] space-y-4">
              <li>
                <strong>Email:</strong> info@voyagersbeat.com
              </li>
              <li>
                <strong>Phone:</strong> +91 8448591315
              </li>
              <li>
                <strong>Address:</strong> H7 B8 Aggarwal Plaza Netaji Subhash
                Place Delhi 110033
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
