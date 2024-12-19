import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

const TermAndCondition = () => {
  return (
    <div className="bg-gray-100 text-gray-900 mt-16 font-sans">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#1a202c] leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Please read our Terms and Conditions carefully before using our
            website and services.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaInfoCircle className="text-blue-500" /> 1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using the VoyagersBeat website (
              <a
                href="https://www.voyagersbeat.com"
                className="text-blue-600 hover:underline"
              >
                www.voyagersbeat.com
              </a>
              ) or our services, you agree to these Terms and Conditions and our
              Privacy Policy. If you do not agree, please refrain from using our
              website or services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaInfoCircle className="text-blue-500" /> 2. Services Provided
            </h2>
            <p className="text-gray-700 leading-relaxed">
              VoyagersBeat offers travel-related services, including tour
              packages, bookings, transport, and accommodations. All services
              are subject to availability and the terms outlined in your booking
              or inquiry.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaCheckCircle className="text-green-500" /> 3. Booking and
              Reservations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When booking with VoyagersBeat, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Provide accurate and complete details.</li>
              <li>
                Confirm your booking upon full payment or advance payment.
              </li>
              <li>
                Accept that we reserve the right to cancel or amend bookings if
                necessary, with alternative options or refunds offered.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaCheckCircle className="text-green-500" /> 4. Payment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Payments are due as per terms on our website or booking
              confirmation. Prices are subject to change without notice and may
              include taxes and service charges.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaExclamationTriangle className="text-red-500" /> 5.
              Cancellations and Refunds
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cancellations are subject to service provider policies. Refunds
              will be processed according to these policies and may include
              non-refundable fees.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaCheckCircle className="text-green-500" /> 6. User
              Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Provide accurate booking details.</li>
              <li>Use our services for lawful purposes.</li>
              <li>Follow service provider terms and conditions.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaExclamationTriangle className="text-red-500" /> 7. Limitation
              of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              VoyagersBeat is not responsible for travel incidents, delays, or
              losses. Our liability is limited to the amount paid for the
              service.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaInfoCircle className="text-blue-500" /> 8. Force Majeure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for delays or failures due to events beyond our
              control, such as natural disasters, wars, or government actions.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3748] flex items-center gap-2 border-b-2 pb-3 mb-4">
              <FaInfoCircle className="text-blue-500" /> 9. Changes to Terms and
              Conditions
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms and Conditions at any time. Please
              review periodically to stay informed.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
