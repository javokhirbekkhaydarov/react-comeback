import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";
import ChatParentComponent from "./ChatParentComponent";
import Image from "../image/ImageComponent.js";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function ChatComponent() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>












      {/*<button*/}
      {/*  onClick={() => setShow(!show)}*/}
      {/*  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"*/}
      {/*>*/}
      {/*  {show ? (*/}
      {/*    <img src="../../assets/burger.svg" alt="" />*/}
      {/*  ) : (*/}
      {/*    <img alt="" src="../../assets/close.svg" />*/}
      {/*  )}*/}
      {/*</button>*/}

      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
