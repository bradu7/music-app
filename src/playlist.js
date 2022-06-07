import { v4 as uuidv4 } from "uuid";

export default function playlist() {
    return [
        {
            name: "Reflection",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#210840", "#B93975"],
            id: uuidv4(),
            active: true,

        },
        {
            name: "Silience",
            cover: "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
            artist: "Toonorth",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8425",
            color: ["#53401C", "#BAE7FE"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Daydream",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9275",
            color: ["#F5BBB0", "#655A96"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Airplane Mode",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist: "Axian, falcxne, Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20121",
            color: ["#EBCBB6", "#A8B339"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Embers",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
            artist: "Molly McPhaul, Enluv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30135",
            color: ["#FC976F", "#465D6B"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Leaf Contour",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/e21760a2e6450015317e20f65dbba27237099f34-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30130",
            color: ["#317571", "#362831"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Woodnote",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod, imagiro",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13014",
            color: ["#A7BC5E", "#55432F"],
            id: uuidv4(),
            active: false,
        },
    ];
}