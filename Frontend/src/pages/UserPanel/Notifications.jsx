import React from "react";
import Notification from "../../components/Notification";

const Notifications = () => {
  let notifications = [
    {
      id: 1,
      type: "success",
      message: "Your profile has been updated successfully.",
      timestamp: "2024-09-26T10:00:00Z",
      isRead: false,
    },
    {
      id: 2,
      type: "warning",
      message: "Your subscription is about to expire in 3 days.",
      timestamp: "2024-09-25T09:30:00Z",
      isRead: false,
    },
    {
      id: 3,
      type: "info",
      message: "New mentor has joined your network.",
      timestamp: "2024-09-24T15:45:00Z",
      isRead: false,
    },
    {
      id: 4,
      type: "error",
      message: "Failed to connect to the video call. Please try again.",
      timestamp: "2024-09-26T08:20:00Z",
      isRead: false,
    },
    {
      id: 5,
      type: "error",
      message: "Failed to connect to the video call. Please try again.",
      timestamp: "2024-09-26T08:20:00Z",
      isRead: false,
    },
    {
      id: 6,
      type: "error",
      message: "Failed to connect to the video call. Please try again.",
      timestamp: "2024-09-26T08:20:00Z",
      isRead: false,
    },
    {
      id: 7,
      type: "error",
      message: "Failed to connect to the video call. Please try again.",
      timestamp: "2024-09-26T08:20:00Z",
      isRead: false,
    },
    {
      id: 8,
      type: "error",
      message: "Failed to connect to the video call. Please try again.",
      timestamp: "2024-09-26T08:20:00Z",
      isRead: false,
    },
    {
      id: 9,
      type: "error",
      message: "Failed to connect to the video call. Please try again.",
      timestamp: "2024-09-26T08:20:00Z",
      isRead: false,
    },
    {
      id: 10,
      type: "error",
      message: "Failed to connect to the video call. Please try again.",
      timestamp: "2024-09-26T08:20:00Z",
      isRead: false,
    },
  ];

  // for getting day name by time string
  // const dateStr = '2024-09-26T04:31:50.646+00:00';
  // const date = new Date(dateStr);
  // const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  // console.log(dayName); // Output: "Thursday"

  // for converting the to get time in am or pm
  // const utcDateStr = '2024-09-26T04:31:50.646+00:00';
  // const date = new Date(utcDateStr);
  // India TimeZone is Asia/Kolkata, which is UTC+5:30
  // const options = {
  //     timeZone: 'Asia/Kolkata',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     second: 'numeric',
  //     hour12: true,
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric'
  // };

  // const istDate = date.toLocaleString('en-US', options);
  // console.log(istDate); // Output: "September 26, 2024, 10:01:50 AM"

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow p-4 min-h-[85vh]">
        <div className="flex flex-col justify-center items-center mb-4">
          <h2 className="text-2xl font-bold font-sans border-b-2 py-2">
            Notifications
          </h2>
        </div>
        <div className="flex flex-col w-full gap-2">
          {notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;