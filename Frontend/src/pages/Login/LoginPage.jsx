import React from "react";

const LoginPage = () => {
  return (
    <section class="bg-gray-100 font-sans h-[91vh] flex flex-col justify-center md:p-5">
      <div class="container mx-auto p-4 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-purple-300 to-pink-200 overflow-hidden rounded-lg shadow-md  min-h-40">
            <div class="flex flex-col items-center justify-center h-full relative">
               <img src="./images/background.jpg" alt="" className="absolute order-3 w-full h-full"/>
              <h1 class="text-4xl font-bold text-white mb-4 md:text-6xl lg:text-9xl relative ml-8">
                Welcome Back!
              </h1>
              {/* <img src="./images/background.jpg" alt="" className="absolute order-3"/> */}
              {/* <img
                src="https://cdn.pixabay.com/photo/2017/02/21/15/19/arrow-2074591_960_720.png"
                alt="Arrow"
                class="w-16 h-16 text-white"
              /> */}
            </div>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md h-full lg:p-36">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">Login</h1>
            <p class="text-gray-600 mb-6">
              Welcome back! Please login to your account.
            </p>
            <form action="#" class="space-y-6">
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="********"
                  required
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember Me
                  </label>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Forget Password?
                </a>
              </div>
              <button
                type="submit"
                class="text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <p class="text-gray-600 text-center mt-4">
                New User?{" "}
                <a href="#" class="text-blue-600 hover:underline">
                  Signup
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;