import React, { useState } from "react";
import axios from "axios";
import Background from "../../assets/backgroundImgPages.webp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};

    // Validation
    if (!formData.name) formErrors.name = "Full name is required.";
    if (!formData.email) formErrors.email = "Email address is required.";
    if (!formData.subject) formErrors.subject = "Subject is required.";
    if (!formData.message) formErrors.message = "Message is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set the errors object
      return;
    }

    setIsLoading(true);
    setFeedbackMessage(null);

    try {
      const response = await axios.post(
        "https://voyagers-beat-blog-backend.onrender.com/api/contact",
        formData
      );
      console.log(response.data);
      setFeedbackMessage({
        type: "success",
        text: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error.response || error);
      setFeedbackMessage({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contact Form Container */}
      <div className="relative z-10 max-w-4xl w-full p-8 md:p-12 bg-white bg-opacity-90 rounded-sm shadow-2xl backdrop-blur-md mt-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-8">
          We'd love to hear from you! Please fill out the form below, and we'll
          respond within 24 hours.
        </p>

        {feedbackMessage && (
          <div
            className={`mb-6 text-center p-4 rounded-md ${
              feedbackMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {feedbackMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              className={`w-full px-4 py-2 border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              className={`w-full px-4 py-3 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#1e73be] text-white rounded-sm py-3 px-8 font-semibold hover:bg-[#1e73be] transition-transform transform hover:scale-105 duration-300 disabled:bg-gray-400"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
