import Profile from "../components/profile/Profile";
import { useState } from "react";
import ToggleImage from "../components/hero/menuToggle";
import burger from "../assets/icons/burger.svg";
import close from "../assets/icons/close.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const url = useState("https://i.imgur.com/MK3eW3Am.jpg");
  const [show, setShow] = useState(false);
  const links = [
    {
      name: "Home",
      url: "home",
      id: 1,
    },
    {
      name: "About",
      url: "about",
      id: 2,
    },
    {
      name: "BookShop",
      url: "book",
      id: 3,
    },
  ];
  return (
    <>
      <div className="home flex flex-col">
        <div className="flex justify-between items-center bg-blue-200 p-2">
          <Link to="/">
            <Profile src={url} alt={"some text"} />
          </Link>
          <ToggleImage
            onClick={() => setShow(!show)}
            close={close}
            burger={burger}
            show={show}
          />
        </div>
        {show && (
          <div className="sidebar">
            <ul className='flex flex-col gap-2'>
              {links.map((link) => (
                <Link to={'/'+ link.url} key={link.id}>{link.name} </Link>
              ))}
            </ul>
          </div>
        )}
        <div
          className={`sidebar h-[100px] w-[100px] rounded-full ${
            show ? "bg-blue-500" : "bg-red-500"
          }`}
        ></div>
      </div>
    </>
  );
}
