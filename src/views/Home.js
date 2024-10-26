import Profile from "../components/profile/Profile";
import { useState } from "react";
import ToggleImage from "../components/hero/menuToggle";
import burger from "../assets/icons/burger.svg";
import close from "../assets/icons/close.svg";
export default function Home() {
  const url = useState("https://i.imgur.com/MK3eW3Am.jpg");
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center bg-blue-200 p-2">
        <Profile src={url} alt={"some text"} />
        <ToggleImage
          onClick={() => setShow(!show)}
          close={close}
          burger={burger}
          show={show}
        />
      </div>
    </>
  );
}
