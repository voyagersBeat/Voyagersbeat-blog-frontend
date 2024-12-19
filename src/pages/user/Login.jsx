import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaExclamationCircle, // Error Icon
} from "react-icons/fa"; // Import eye icons
import { useLoginUserMutation } from "../../redux/features/auth/AuthApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image1 from "../../assets/hero-images/blog-image-1.webp";
import Image2 from "../../assets/hero-images/blog-image-2.webp";
import Image3 from "../../assets/hero-images/blog-image-3.webp";
import Image4 from "../../assets/hero-images/blog-image-4.webp";
import Image5 from "../../assets/hero-images/blog-image-5.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();

  const [emailError, setEmailError] = useState(""); // State to track email error
  const [passwordError, setPasswordError] = useState(""); // State to track password error
  const [generalError, setGeneralError] = useState(""); // State to track general error

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle login after validation
  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError(""); // Clear previous errors
    setPasswordError(""); // Clear previous errors
    setGeneralError(""); // Clear general error

    if (!email || !password) {
      // Validation if fields are empty
      if (!email) setEmailError("Email is required");
      if (!password) setPasswordError("Password is required");
      return;
    }

    const data = { email, password };

    try {
      const response = await loginUser(data).unwrap();
      const { token, user } = response;

      // Save token in cookies
      document.cookie = `token=${token}; path=/`;

      // Dispatch setUser to update Redux state and local storage
      dispatch(setUser({ user }));

      alert(`Login Successful, ${user.username}`);
      navigate("/"); // Redirect to homepage after login
    } catch (error) {
      console.log("Login failed:", error);
      setGeneralError("Invalid email or password");

      // Set both email and password errors to show the general error
      setEmailError("Invalid email or password");
      setPasswordError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center md:px-20 px-6 bg-gray-50">
      {/* Left Side - Swiper Carousel */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full lg:h-[420px] sm:h-96 h-80">
          {/* Swiper goes here */}
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

      {/* Right Side - Login Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login to Voyagers Beat
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`w-full pl-12 pr-4 py-2 bg-gray-100 focus:bg-white border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none transition`}
              />
              {emailError && (
                <FaExclamationCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500" />
              )}
            </div>
            {emailError && (
              <span className="text-red-500 text-sm">{emailError}</span>
            )}

            {/* Password Input */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full pl-12 pr-4 py-2 bg-gray-100 focus:bg-white border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none transition`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </button>
              {passwordError && (
                <FaExclamationCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500" />
              )}
            </div>
            {passwordError && (
              <span className="text-red-500 text-sm">{passwordError}</span>
            )}

            <button
              disabled={loginLoading}
              type="submit"
              className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white font-semibold py-2 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            >
              {loginLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?
            <Link className="text-indigo-600 hover:underline" to="/register">
              Sign up here
            </Link>
          </p>

          <div className="flex justify-center gap-4 mt-6">
            {/* Social Media Links */}
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

export default Login;
