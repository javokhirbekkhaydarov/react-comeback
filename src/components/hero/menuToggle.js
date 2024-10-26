import Image from "../image/ImageComponent";

export default function ToggleImage({ close, burger, show, onClick }) {
  return (
    <div onClick={onClick} className="relative w-10 h-10 cursor-pointer">
      <div
        className={`absolute inset-0 transition-transform duration-300 origin-center ${show ? "opacity-100  rotate-0 " : "opacity-0 -rotate-180"}`}
      >
        <Image src={close} alt="close" />
      </div>
      <div
        className={`absolute inset-0 transition-transform duration-300 origin-center ${show ? "opacity-0 rotate-180" : "opacity-100 rotate-0 "}`}
      >
        <Image src={burger} alt="burger" />
      </div>
    </div>
  );
}
