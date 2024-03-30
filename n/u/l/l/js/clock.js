var BG = [
    // "A_GUWEIZ (1).jpg",
    // "A_GUWEIZ (24).jpg",
    // "A_GUWEIZ (37).jpg",
    // "A_GUWEIZ (72).jpg",
    // "A_GUWEIZ (73).jpg",
    // "A_GUWEIZ (79).jpg",
    "LS (1).jpg",
    "LS (2).jpg",
    "LS (3).jpg",
    "LS (5).jpg",
    "LS (6).jpg",
    "LS (8).jpg",
    "LS (9).jpg",
    "LS (10).jpg",
    "LS (11).jpg",
    "LS (12).jpg",
    "LS (13).jpg",
    "LS (14).jpg",
    "LS (15).jpg",
    "LS (16).jpg",
    "LS (17).jpg",
    "LS (18).jpg",
    "LS (19).jpg",
    "LS (21).jpg",
    "LS (22).jpg",
];
var BGPanel = document.getElementById('background-panel');
var MenuPanel = document.getElementById('menu-panel');
var btnSHP = document.getElementById('btn-show-home-panel');
var BGIndex = 0;
var BGIndexNext = 1;
BG = shuffleList(BG);
for (let index = 0; index < BG.length; index++) {
    const img = BG[index];    
    let opacity = index ==0 ? "opacity:1;" : "opacity:0;";
        BGPanel.innerHTML += `
        <div class= "position-absolute w-100 h-100 display-transition background-img bg-zoom"
            style='background-image: url("assets/imgs/backgrounds/`+ img + `");`+opacity+`'>
        </div>`;

    
}

var clocks =document.getElementsByClassName("date-time__clock");
var days =document.getElementsByClassName("date-time__calendar");
var lite_clock =document.getElementById("clock-lite");
var lite_day =document.getElementById("day-lite");

function currentTime() {
    let date = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let hh = date.getHours();
    let mm = date.getMinutes();

    let dd = date.getDate();
    let yyyy = date.getFullYear();
    let day = weekday[date.getDay()];
    let MM = month[date.getMonth()];

    dd = (dd < 10) ? "0" + dd : dd;

    let calendar = day + ", " + dd + " " + MM + " " + yyyy;

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm;

    // clocks[0].innerText = time;
    // days[0].innerText = calendar;
    lite_clock.innerHTML=hh+`<span style="display:block;line-height:40px;">:</span>`+mm;
    lite_day.innerText=calendar;
    if (BGIndexNext >= BG?.length) BGIndexNext = 0;
    BGPanel.children[BGIndexNext].style.opacity = 1;
    BGPanel.children[BGIndex].style.opacity = 0;
    BGIndex += 1;
    BGIndexNext += 1;
    if (BGIndex >= BG?.length) {
        BGIndex = 0;
    }
    let t = setTimeout(function () { currentTime() }, 15000);
}
currentTime();

function shuffleList(list) {
    let shuffledList = list
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffledList;
}
var isShow = false;
function showHomePanel() {
    if (isShow) {
        MenuPanel.style.display = 'none';
        btnSHP.style.display='block';
    }
    else {
        MenuPanel.style.display = 'block';
        btnSHP.style.display='none';
    }
    isShow=!isShow;
}

function redirect(type) {
    showHomePanel();
    switch (type) {
        case "Music":
            window.open("https://null-home.github.io/n/u/l/l/music.html");
            break;

        case "Library":
            window.open("https://null-home.github.io/n/u/l/l/library.html");
            break;
        default:
            break;
    }
}
