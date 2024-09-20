import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
const RoomConnected = ({
  myStream,
  remoteSocketId,
  sendStreams,
  handleCallUser,
  show,
}) => {
  return (
    <div
      className={`w-full h-[91vh] flex justify-center items-center bg-gray-100 ${
        show && "hidden"
      } `}
    >
      <div className="">
        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center gap-2">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your connection is Succefully done..
            </h5>
          </a>

          <div className="flex flex-col gap-2">
            {/* {myStream && <button onClick={sendStreams}>Send Stream</button>} */}
            {myStream && (
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-5"
                onClick={sendStreams}
              >
                <IoCall className="text-2xl mr-3 border-r-2 pr-2" />
                Connect to the Mentor
              </button>
            )}

            {/* {remoteSocketId && <button onClick={handleCallUser}>CALL</button>} */}
            {remoteSocketId && (
              <button
                onClick={handleCallUser}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
              >
                <IoCall className="text-2xl mr-3 border-r-2 pr-2" />
                Call the Student
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomConnected;
