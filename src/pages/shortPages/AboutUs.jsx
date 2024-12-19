import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans md:mt-20 mt-16">
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e73be] mb-6 tracking-wide">
            Voyagers Beat: Your Gateway to Adventure
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Founded in 2017,{" "}
            <span className="font-semibold">Voyagers Beat</span> is more than
            just a travel agency—it's a community for passionate explorers. Our
            mission is to take you beyond the usual tourist spots and help you
            uncover hidden gems across India.
          </p>
        </section>

        {/* Founder Section */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet the Founder
          </h2>
          <p className="leading-relaxed text-gray-700">
            At the heart of Voyagers Beat is{" "}
            <span className="font-semibold">Mr. Vaibhav Sethi</span>, a former
            software engineer turned travel entrepreneur. With a background
            rooted in a family of educators, Vaibhav transformed his love for
            travel into a thriving business. Having journeyed to over 70
            destinations, he established Voyagers Beat from a humble home
            office.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text--[#1e73be] mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are explorers, dreamers, and planners. Whether you’re planning a
            solo trip, a group expedition, a romantic honeymoon, a family
            vacation, or an educational trip,{" "}
            <span className="font-semibold">Voyagers Beat</span> is your
            one-stop solution for all things travel.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="bg-blue-100 p-8 md:p-12 rounded-sm shadow-lg mb-16">
          <h2 className="text-3xl font-bold text--[#1e73be] mb-6">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Transportation:</span> Comfortable
              and reliable travel arrangements.
            </li>
            <li>
              <span className="font-semibold">Accommodation:</span> Unique,
              cozy, and beautiful lodgings.
            </li>
            <li>
              <span className="font-semibold">Culinary Delights:</span> A buffet
              of delicious local and global cuisines.
            </li>
            <li>
              <span className="font-semibold">Privacy Options:</span> Special
              arrangements for couples and solo female travelers.
            </li>
            <li>
              <span className="font-semibold">Exciting Activities:</span>{" "}
              Bonfires, music nights, and adventure sports.
            </li>
            <li>
              <span className="font-semibold">Professional Trip Managers:</span>{" "}
              Experienced guides to ensure smooth journeys.
            </li>
            <li>
              <span className="font-semibold">24/7 Support:</span> On-the-spot
              assistance throughout your trip.
            </li>
          </ul>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text--[#1e73be] mb-6">
            Why Choose Voyagers Beat?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-2">
                ✅ Value & Peace of Mind
              </h3>
              <p className="text-gray-600">
                Transparent pricing with everything you need included.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-2">
                🌍 Authentic Experiences
              </h3>
              <p className="text-gray-600">
                Travel like a local and see the world through new eyes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-2">
                💙 Responsible Travel
              </h3>
              <p className="text-gray-600">
                We believe in giving back and making a positive impact on local
                communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-2">
                👫 Small-Group Adventures
              </h3>
              <p className="text-gray-600">
                Connect with fellow travelers and leave with lifelong
                friendships.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Adventure Awaits</h2>
          <p className="text-gray-700 mb-6">
            Join us and experience the joy of travel, the thrill of exploration,
            and the beauty of connecting with the world.
          </p>
          <a
            href="https://wa.me/8448591315"
            className="inline-block bg-[#1e73be] text-white font-semibold py-3 px-8 rounded-sm hover:bg-[#1e73be]transition duration-300 hover:bg-[#145a8a] transition-colors"
          >
            Plan Your Next Adventure
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
