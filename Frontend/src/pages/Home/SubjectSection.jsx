import React from "react";
import { MdEngineering } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { MdScience } from "react-icons/md";
import { MdHistoryEdu } from "react-icons/md";
import { MdPsychology } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaReplyAll } from "react-icons/fa";
const SubjectSection = () => {
  return (
    <>
      <section class="bg-white py-12 flex justify-center">
        <div className="w-11/12">
          <div class="container mx-auto">
            <div class="text-center">
              <h2 class="text-4xl font-bold mb-4">OUR TUTOR SUBJECTS</h2>
              <h1 class="text-6xl font-bold mb-4">
                Find Online Tutor in Any Subject
              </h1>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-10 md:grid-cols-3  lg:grid-cols-4">
              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 "
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                  <FaLaptopCode className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  Programming
                </div>
              </div>

              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                  <MdEngineering className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  Engineering
                </div>
              </div>

              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-pink-500 bg-pink-100 rounded-lg dark:bg-pink-800 dark:text-pink-200">
                  <LiaLanguageSolid className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  Languages
                </div>
              </div>

              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-purple-500 bg-purple-100 rounded-lg dark:bg-purple-800 dark:text-purple-200">
                  <MdScience className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  Science
                </div>
              </div>

              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
                  <MdHistoryEdu className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  History
                </div>
              </div>

              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                  <MdPsychology className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  Psychology
                </div>
              </div>

              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 md:hidden lg:flex"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-800 dark:text-orange-200 ">
                  <CgWebsite className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  Web Design
                </div>
              </div>

              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 md:hidden lg:flex"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                  <FaReplyAll className="text-xl" />
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-xl font-bold  text-black font-sans">
                  See all
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubjectSection;
