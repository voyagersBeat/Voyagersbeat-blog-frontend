import React, { useState } from "react";
import Background from "../../assets/backgroundImgPages.webp";
import {
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    // Position validation
    if (!formData.position) {
      newErrors.position = "Please select a position.";
    }

    setErrors(newErrors);

    // If no errors, process the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Application submitted successfully!");
      // Reset the form
      setFormData({ name: "", email: "", position: "" });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans mt-24">
      {/* Hero Section */}
      <section
        className="text-primary py-20 text-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Join Our Team
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-800">
          At <strong>VoyagersBeat</strong>, we’re passionate about redefining
          travel. Explore open positions and grow your career with us!
        </p>
      </section>

      {/* Job Openings Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Current Openings
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-[#1e73be] mr-2" size={28} />
                <h3 className="text-xl font-semibold">{job.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{job.location}</p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <a
                href="#apply"
                className="inline-block text-[#1e73be] font-semibold hover:underline"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@123.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Position
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.position ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a position</option>
              {jobListings.map((job, index) => (
                <option key={index} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
            {errors.position && (
              <p className="text-red-500 mt-1">{errors.position}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#1e73be] text-white rounded-sm py-3 px-6 font-semibold hover:bg-[#397bb1] transition-colors duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

// Sample job listings
const jobListings = [
  {
    title: "Sales Executive",
    location: "Work From Office",
    description:
      "Generate leads, manage client relationships, achieve sales targets, and promote products/services.",
  },
  {
    title: "Sales Manager",
    location: "Work From Office",
    description:
      "Oversee sales strategies, manage team performance, generate leads, and build client relationships.",
  },
  {
    title: "Trip Caption",
    location: "Remote",
    description:
      "Plan, coordinate, and manage travel itineraries, budgets, vendors, and client communication.",
  },
];

export default Career;
