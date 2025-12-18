const song = document.getElementById("song");
const lyricsDiv = document.getElementById("lyrics");

song.play().catch(() => {
    document.body.addEventListener("click", () => song.play(), { once: true });
});

const lyrics = [
    { time: 0.5, text: "Paata ho khud ko har ghadi" },
    { time: 2.8, text: "Tere bina tanha" },
    { time: 5.6, text: "Mujhe thaam le mujhe rok le" },
    { time: 8.5, text: "Bhatka hoon main bhatka" },
    { time: 10.8, text: "Tu hi mera mera mera" },
    { time: 13.2, text: "Tu hi mera mera mera" },
    { time: 15.9, text: "Tu hi mera mera mera" }
];

let index = 0;

song.addEventListener("timeupdate", () => {
    if (index < lyrics.length && song.currentTime >= lyrics[index].time) {
        showLine(lyrics[index].text);
        index++;
    }
});

/* RESET if user seeks or restarts */
song.addEventListener("seeked", () => {
    index = 0;
    lyricsDiv.innerHTML = "";
});

song.addEventListener("ended", () => {
    index = 0;
    lyricsDiv.innerHTML = "";
});

function showLine(line) {
    lyricsDiv.innerHTML = ""; // clear ONLY here

    const words = line.split(" ");
    words.forEach((word, i) => {
        const span = document.createElement("span");
        span.className = "word";
        span.style.animationDelay = `${i * 0.25}s`; // faster & beat-matched
        span.textContent = word + " ";
        lyricsDiv.appendChild(span);
    });
}

/* HEARTS */
const heartBox = document.querySelector(".hearts");

setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (4 + Math.random() * 3) + "s";
    heartBox.appendChild(h);
    setTimeout(() => h.remove(), 7000);
}, 400);
