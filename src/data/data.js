import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Sunset Vibes",
            cover: "https://i.scdn.co/image/ab67616d0000b273e1711a91a0feaf0db417b973",
            artist: "DJ Chill",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            color: ["#FF9F45", "#FC5C65"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Relaxing Waters",
            cover:
                "https://via.placeholder.com/1024x1024.png?text=Relaxing+Waters+Cover",
            artist: "Aqua Beats",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            color: ["#5D8AA8", "#3A506B"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Night Groove",
            cover:
                "https://via.placeholder.com/1024x1024.png?text=Night+Groove+Cover",
            artist: "Moonlight",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            color: ["#2A0944", "#F4C4C4"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Morning Breeze",
            cover:
                "https://via.placeholder.com/1024x1024.png?text=Morning+Breeze+Cover",
            artist: "The Early Birds",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            color: ["#A8E6CE", "#FFDDC1"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default chillHop;
