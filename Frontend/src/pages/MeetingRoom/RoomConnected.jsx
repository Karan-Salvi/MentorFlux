import React from "react";
import { IoCall } from "react-icons/io5";
const RoomConnected = () => {
  return (
    <div className="w-full h-[91vh] flex justify-center items-center bg-gray-100">
      <div className="">
        <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center gap-2">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your connection is Succefully done..
            </h5>
          </a>

          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            <IoCall className="text-2xl mr-3 border-r-2 pr-2" />
            Call the Student
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomConnected;
