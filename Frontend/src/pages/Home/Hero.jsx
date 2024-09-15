import React from "react";

const Hero = () => {
  return (
    <>
      <section class="bg-white py-12 w-full flex justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-between w-10/12 h-auto">
          <div class="container mx-auto flex flex-col justify-between h-full w-full">
            <div class="text-center md:text-start flex flex-col justify-around h-full">
              <h2 class="text-xl font-bold mb-4 text-yellow-600">
                100% SATISFACTION GUARANTEE
              </h2>
              <h1 class="text-6xl md:text-8xl md:font-extrabold font-bold mb-4">
                Find Your Perfect Mentor
              </h1>
              <p class="text-lg mb-8">
                Find guidance, support, and industry insights from seasoned
                professionals. Achieve your goals with our mentorship
                platform.Our platform bridges the gap between students and
                experienced mentors.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Find your Mentor
                </button>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/5 object-contain flex justify-center items-center">
            <img src="./images/student.png" className="w-full h-auto" alt="" />
          </div>
        </div>
      </section>
      <div class="flex flex-wrap justify-center mt-8">
        <div class="w-full md:w-1/4 p-4">
          <div class="bg-blue-500 rounded-lg p-6 text-center">
            <h3 class="text-white font-bold text-3xl mb-2">870</h3>
            <p class="text-white font-bold">Expert tutors</p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-4">
          <div class="bg-blue-500 rounded-lg p-6 text-center">
            <h3 class="text-white font-bold text-3xl mb-2">20,000+</h3>
            <p class="text-white font-bold">Hours tutored</p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-4">
          <div class="bg-blue-500 rounded-lg p-6 text-center">
            <h3 class="text-white font-bold text-3xl mb-2">298</h3>
            <p class="text-white font-bold">Subjects and courses</p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-4">
          <div class="bg-blue-500 rounded-lg p-6 text-center">
            <h3 class="text-white font-bold text-3xl mb-2">72,920</h3>
            <p class="text-white font-bold">Active students</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
