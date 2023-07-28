function christmasCountdown() {
    const christmasDate = new Date ("December 25, 2023 00:00");
    const myDate = new Date();
    const diff = christmasDate - myDate;

    const msInSecond = 1000;
    const msInMenute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMenute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecunde = Math.floor((diff%msInMenute) / msInSecond);
    document.querySelector(".secunds").textContent = displaySecunde;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".secunds").textContent = 0;
        document.querySelector(".container").textContent = 0;

        clearInterval(timerID);
        merryChristmas();

    }

}

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    heading.classList.add("red");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})