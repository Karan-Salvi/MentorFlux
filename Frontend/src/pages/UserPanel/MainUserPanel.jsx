import React from "react";

import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const MainUserPanel = () => {
  const handleLogOut = async () => {
    const responce = await fetch("http://localhost:8000/api/v1/logout", {
      method: "Get",
      credentials: "include",
    });

    const data = await responce.json();

    console.log("User Logged out data is : ", data);

    if (data.success == true) {
      navigate("/user/login");
    }
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-row gap-4">
          <div className="w-3/12 bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-4">
              <img
                src="./images/profile.jpeg"
                alt="Profile Picture"
                className="rounded-full w-10 h-10 mr-2"
              />
              <span className="text-lg font-medium">Hello, William</span>
            </div>
            <ul className="list-none">
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 4a1 1 0 011-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4z"
                    />
                  </svg>
                  <span className="ml-2">Dashboard</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H5a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-4M10 4h.01M10 20h.01M9 10h.01m1 0l-1 1m5-1l-1-1"
                    />
                  </svg>
                  <span className="ml-2">My Wallet</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="ml-2">Add New</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 4a1 1 0 011-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4z"
                    />
                  </svg>
                  <span className="ml-2">Card List</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-2">History</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 17v-2m3 2v-2m3 2v-2m3 2v-2m-9 4v-2m3 2v-2m3 2v-2m3 2v-2m-9 4v-2m3 2v-2m3 2v-2m3 2v-2"
                    />
                  </svg>
                  <span className="ml-2">Transaction</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-12 0v1z"
                    />
                  </svg>
                  <span className="ml-2">Crypto</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 10V3L4 14h7v7l9-9H9v7l9-9h-7v7l9-9H3v17h10v-7"
                    />
                  </svg>
                  <span className="ml-2">Exchange</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.573-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="ml-2">Settings</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-9/12 bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Portfolio</h2>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2">21°</span>
                <select className="ml-2 border rounded px-2 py-1">
                  <option>Medan, ID</option>
                  <option>Jakarta, ID</option>
                </select>
                <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Filter Periode
                </button>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Coin Holding</h3>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2 font-medium">Ethereum</span>
                    <span className="ml-2 text-gray-500 text-sm">ETH</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900">
                      $168,331.09
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <span className="ml-2 text-green-500 text-sm">
                      45% This week
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2 font-medium">LiteCoin</span>
                    <span className="ml-2 text-gray-500 text-sm">LTC</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900">
                      $667,224
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 17l5-5m0 0l-5-5m5 5H6"
                      />
                    </svg>
                    <span className="ml-2 text-red-500 text-sm">
                      45% This week
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2 font-medium">BitCoin</span>
                    <span className="ml-2 text-gray-500 text-sm">BTC</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900">
                      $24,098
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <span className="ml-2 text-green-500 text-sm">
                      45% This week
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2 font-medium">Monero</span>
                    <span className="ml-2 text-gray-500 text-sm">XMR</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900">
                      $18,783.33
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <span className="ml-2 text-green-500 text-sm">
                      45% This week
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Recent Activity</h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <span className="ml-2 font-medium">Topup</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">06:24:45 AM</span>
                    <span className="ml-2 text-green-500 text-sm">+$5,553</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Weekly Summary</h3>
              <div className="grid grid-cols-8 gap-2 mt-4">
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Sun</span>
                </div>
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Mon</span>
                </div>
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Tue</span>
                </div>
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Wed</span>
                </div>
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Thu</span>
                </div>
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Fri</span>
                </div>
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Sat</span>
                </div>
                <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
                  <span className="text-gray-500 text-xs">Completed</span>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-2 mt-2">
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-green-500 rounded-t-lg h-16"></div>
                  <div className="bg-gray-300 h-4"></div>
                  <div className="bg-red-500 rounded-b-lg h-16"></div>
                </div>
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-green-500 rounded-t-lg h-20"></div>
                  <div className="bg-gray-300 h-8"></div>
                  <div className="bg-red-500 rounded-b-lg h-12"></div>
                </div>
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-green-500 rounded-t-lg h-12"></div>
                  <div className="bg-gray-300 h-12"></div>
                  <div className="bg-red-500 rounded-b-lg h-20"></div>
                </div>
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-green-500 rounded-t-lg h-24"></div>
                  <div className="bg-gray-300 h-4"></div>
                  <div className="bg-red-500 rounded-b-lg h-8"></div>
                </div>
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-green-500 rounded-t-lg h-16"></div>
                  <div className="bg-gray-300 h-12"></div>
                  <div className="bg-red-500 rounded-b-lg h-16"></div>
                </div>
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-green-500 rounded-t-lg h-16"></div>
                  <div className="bg-gray-300 h-4"></div>
                  <div className="bg-red-500 rounded-b-lg h-24"></div>
                </div>
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-green-500 rounded-t-lg h-8"></div>
                  <div className="bg-gray-300 h-16"></div>
                  <div className="bg-red-500 rounded-b-lg h-20"></div>
                </div>
                <div
                  className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
                  style={{ height: "100px" }}
                >
                  <div className="bg-gray-300 h-24"></div>
                  <div className="bg-gray-300 h-24"></div>
                  <div className="bg-gray-300 h-24"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-green-500 rounded-full p-2 text-center text-white">
                  <span className="text-sm font-medium">30%</span>
                  <span className="text-xs">Successful Market</span>
                </div>
                <div className="bg-gray-300 rounded-full p-2 text-center text-gray-700">
                  <span className="text-sm font-medium">45%</span>
                  <span className="text-xs">Failed</span>
                </div>
                <div className="bg-red-500 rounded-full p-2 text-center text-white">
                  <span className="text-sm font-medium">10%</span>
                  <span className="text-xs">Waiting</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12 bg-white rounded-lg shadow p-4 h-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">My Profile</h3>
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <BsThreeDotsVertical className="text-lg" />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to={"/user/dashboard"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  data-collapse-toggle="navbar-user"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-user"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mb-4">
              <img
                src="./images/profile.jpeg"
                alt="Profile Picture"
                class="rounded-full w-24 h-24 mx-auto"
              />
              <h4 class="text-lg font-medium mt-2">William Fancyson</h4>
              <span class="text-gray-500 text-sm">@thomasdox</span>
              <p class="text-gray-500 text-sm mt-2">Join on 24 March 2017</p>
              <p class="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div class="flex justify-center mt-4">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2">
                  <FaHome className="text-lg font-extrabold" />
                </button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2">
                  <IoMdSettings className="text-lg font-extrabold" />
                </button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                  <RiLogoutBoxLine className="text-lg font-extrabold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainUserPanel;
