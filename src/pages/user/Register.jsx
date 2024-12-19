import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image1 from "../../assets/hero-images/blog-image-1.webp";
import Image2 from "../../assets/hero-images/blog-image-2.webp";
import Image3 from "../../assets/hero-images/blog-image-3.webp";
import Image4 from "../../assets/hero-images/blog-image-4.webp";
import Image5 from "../../assets/hero-images/blog-image-5.webp";
import { useRegisterUserMutation } from "../../redux/features/auth/AuthApi";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (!username.trim()) {
      setUsernameError("Username is required.");
      isValid = false;
    } else if (username.length < 3) {
      setUsernameError("Username must be at least 3 characters.");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      await registerUser({ username, email, password }).unwrap();
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed:");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center md:px-20 px-6 bg-gray-50 md:pt-0 pt-16">
      {/* Left Side - Swiper Carousel */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full lg:h-[420px] sm:h-96 h-80">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="w-full h-full shadow-lg overflow-hidden"
          >
            <SwiperSlide>
              <img
                src={Image1}
                alt="Blog Slide 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image2}
                alt="Blog Slide 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image3}
                alt="Blog Slide 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image4}
                alt="Blog Slide 4"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image5}
                alt="Blog Slide 5"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up to Voyagers Beat
          </h2>
          <form className="space-y-6" onSubmit={handleRegister}>
            {/* Username Field */}
            <div className="space-y-1">
              <div className="relative flex items-center">
                <FaUser className="absolute left-4 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className={`w-full pl-12 pr-4 py-2 bg-gray-100 focus:bg-white border ${
                    usernameError ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none transition`}
                />
              </div>
              <div>
                {usernameError && (
                  <p className="text-red-500 text-sm">{usernameError}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={`w-full pl-12 pr-4 py-2 bg-gray-100 focus:bg-white border ${
                    emailError ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none transition`}
                />
              </div>
              <div>
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="relative flex items-center">
                <FaLock className="absolute left-4 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`w-full pl-12 pr-4 py-2 bg-gray-100 focus:bg-white border ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none transition`}
                />
              </div>
              <div>
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white font-semibold py-2 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link className="text-indigo-600 hover:underline" to="/login">
              Log in here
            </Link>
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://wa.me/8448591315"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-500 text-2xl hover:text-green-600" />
            </a>
            <a
              href="https://www.linkedin.com/company/voyagersbeat07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-700" />
            </a>
            <a
              href="https://www.facebook.com/voyagersBeat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-500 text-2xl hover:text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/voyagersbeat?igsh=OGI2cGh0NzdvamE4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-2xl hover:text-pink-600" />
            </a>
            <a
              href="https://voyagersbeat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="text-gray-700 text-2xl hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
