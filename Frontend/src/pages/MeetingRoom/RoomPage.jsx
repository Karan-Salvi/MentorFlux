import React, { useEffect, useCallback, useState, useRef } from "react";
import ReactPlayer from "react-player";
import peer from "../../service/peer.js";
import { useSocket } from "../../context/SocketProvider.jsx";
import { MdCallEnd } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaVideoSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { messageActions } from "../../store/messageSlice.js";
import Message from "../../components/Message.jsx";

import Navbar from "../../components/Navbar.jsx";
import RoomConnected from "./RoomConnected.jsx";
import NoOneMessage from "./NoOneMessage.jsx";
const RoomPage = () => {
  const user = useSelector((store) => store.user);
  const messages = useSelector((store) => store.messages);
  const dispatch = useDispatch();
  console.log("User is here", user);

  const messageElement = useRef();
  const RoomIdElement = useRef();

  const [show, setShow] = useState(false);

  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const [userMicrophone, setUserMicrophone] = useState(false);
  const [userVideoscreen, setUserVideoscreen] = useState(false);

  const [mentorMicrophone, setMentorMicrophone] = useState(false);
  const [mentorVideoscreen, setMentorVideoscreen] = useState(true);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
    setShow(true);
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  const handleReceivedMessage = useCallback(
    async (data) => {
      console.log("hdhhdhhdhd");
      // console.log("Message is : ", message, "Room is : ", room);
      console.log(data);
      dispatch(messageActions.addMessage(data));
    },
    [socket]
  );

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);
    socket.on("receive-message", handleReceivedMessage);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
      socket.off("receive-message", handleReceivedMessage);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
    handleReceivedMessage,
  ]);

  const handleLeaveRoom = async () => {
    // Close the peer connection
    peer.peer.close();

    // Reset the streams and remote socket ID
    setMyStream(null);
    setRemoteStream(null);
    setRemoteSocketId(null);

    // Emit a socket event to notify others that you've left the room
    socket.emit("user:left", { from: remoteSocketId });

    // Navigate back to the previous page or home page
    // history.push("/"); // Assuming you're using React Router
  };

  const handleUserMicrophone = async () => {
    setUserMicrophone(!userMicrophone);
  };

  const handleUserVideoScreen = async () => {
    setUserVideoscreen(!userVideoscreen);
  };

  const handleMentorMicrophone = async () => {
    setMentorMicrophone(!mentorMicrophone);
  };

  const handleMentorVideoScreen = async () => {
    setMentorVideoscreen(!mentorVideoscreen);
  };

  const handleMessage = async (event) => {
    event.preventDefault();
    const message = messageElement.current.value;
    const room = 111;
    socket.emit("message", { message, room });
  };

  return (
    <>
      <Navbar />
      <div>
        {/* <h1>Room Page</h1> */}
        <h4>
          {remoteSocketId ? (
            <RoomConnected
              myStream={myStream}
              remoteSocketId={remoteSocketId}
              sendStreams={sendStreams}
              handleCallUser={handleCallUser}
              show={show}
            />
          ) : (
            <NoOneMessage />
          )}
        </h4>
        {/* {myStream && <button onClick={sendStreams}>Send Stream</button>}
        {remoteSocketId && <button onClick={handleCallUser}>CALL</button>} */}
        {myStream && remoteSocketId && show && (
          <section className="flex justify-between w-full h-[91vh] relative px-2 gap-5 p-4">
            <div className="flex flex-col justify-between ">
              <div className="flex ">
                <div className="rounded-sm overflow-hidden relative h-[58vh]">
                  {myStream && (
                    <>
                      {/* <h1>My Stream</h1> */}
                      <div className="overflow-hidden bg-black rounded-lg flex justify-center items-center h-[456px] w-[855px]">
                        <ReactPlayer
                          muted
                          playing={userVideoscreen}
                          height="640px"
                          width="900px"
                          url={myStream}
                        />
                      </div>
                    </>
                  )}
                  <div className="flex absolute bottom-1 justify-center w-full">
                    <div className="flex justify-between">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-gray-800 hover:bg-black focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm p-2.5  dark:bg-gray-700 dark:hover:bg-gray-900 dark:focus:ring-gray-700 m-6 flex justify-center items-center"
                        onClick={handleUserVideoScreen}
                      >
                        {userVideoscreen ? (
                          <FaVideo className="text-xl" />
                        ) : (
                          <FaVideoSlash className="text-xl" />
                        )}
                      </button>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-6 flex justify-center items-center"
                        onClick={handleLeaveRoom}
                      >
                        <MdCallEnd className="text-2xl" />
                      </button>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-gray-800 hover:bg-black focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm p-2.5  dark:bg-gray-700 dark:hover:bg-gray-900 dark:focus:ring-gray-700 m-6 flex justify-center items-center"
                        onClick={handleUserMicrophone}
                      >
                        {userMicrophone ? (
                          <FaMicrophoneSlash className="text-2xl" />
                        ) : (
                          <FaMicrophone className="text-xl" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center h-[200px] gap-3">
                <div className="overflow-hidden w-[389px] rounded-lg  flex justify-center items-center ">
                  {remoteStream && (
                    <>
                      {/* <h1>Remote Stream</h1> */}
                      <ReactPlayer
                        playing={mentorVideoscreen}
                        muted
                        height="200px"
                        width="280px"
                        url={remoteStream}
                      />
                    </>
                  )}
                </div>
                <div
                  className="bg-green-400 w-full h-full flex justify-center items-center text-lg font-bold text-white
                rounded-lg "
                >
                  Notes
                </div>
              </div>
            </div>

            <div
              className="flex w-full justify-center relative
       "
            >
              <div className="flex flex-col w-full pb-10 gap-2 bg-green-100 rounded-lg overflow-hidden ">
                <div className="w-full bg-green-400 h-16 top-0 flex justify-start pl-5 items-center">
                  <p className="text-3xl font-extrabold text-white">
                    Chat Section
                  </p>
                </div>
                {messages.map((message) => (
                  <Message key={message.length} message={message} />
                ))}
              </div>
              <form
                className="w-11/12 absolute bottom-5"
                onSubmit={handleMessage}
              >
                <label for="chat" className="sr-only">
                  Your message
                </label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        fill="currentColor"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                      />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  <textarea
                    id="chat"
                    rows="1"
                    className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                    ref={messageElement}
                  ></textarea>
                  <button
                    type="submit"
                    className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5 rotate-90 rtl:-rotate-90"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span className="sr-only">Send message</span>
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        <div className="flex flex-col">
          {/* {myStream && (
          <>
            <h1>My Stream</h1>
            <div className="overflow-hidden bg-black w-full flex justify-center items-center">
              <ReactPlayer
                playing
                muted
                height="450px"
                width="900px"
                url={myStream}
              />
            </div>
          </>
        )} */}

          {/* {remoteStream && (
            <>
              <h1>Remote Stream</h1>
              <ReactPlayer
                playing={mentorVideoscreen}
                muted={mentorMicrophone}
                height="300px"
                width="900px"
                url={remoteStream}
              />
            </>
          )} */}
        </div>
      </div>
    </>
  );
};

export default RoomPage;
