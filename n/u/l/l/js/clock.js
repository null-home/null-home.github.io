var BG = [ "Space (1).jpeg", "Space (1).jpg", "Space (1).png", "Space (2).jpeg", "Space (2).jpg", "Space (2).png", "Space (3).jpg", "Space (3).png", "Space (4).jpg", "Space (4).png", "Space (5).jpg", "Space (5).png", "Space (6).jpg", "Space (6).png", "Space (7).jpg", "Space (7).png", "Space (8).jpg", "Space (8).png", "Space (9).jpg", "Space (9).png", "Space (10).jpg", "Space (10).png", "Space (11).jpg", "Space (11).png", "Space (12).jpg", "Space (12).png", "Space (13).jpg", "Space (13).png", "Space (14).jpg", "Space (14).png", "Space (15).jpg", "Space (15).png", "Space (16).jpg", "Space (16).png", "Space (17).jpg", "Space (17).png", "Space (18).png", "Space (19).png", "Space (20).png", "Space (21).png", "Space (22).png", ];
var BGPanel = document.getElementById('background-panel');
var BGIndex = 0;
var BGIndexNext = 1;
BG = shuffleList(BG);
BGPanel.innerHTML += `
    <div class= "position-absolute w-100 h-100 display-transition background-img bg-zoom"
        style='background-image: url("assets/imgs/backgrounds/`+ BG.pop() + `"); opacity:1;'>
    </div>
    <div class= "position-absolute w-100 h-100 display-transition background-img bg-zoom"
        style='background-image: url("assets/imgs/backgrounds/`+ BG.pop() + `"); opacity:0;'>
    </div>    
    <div class= "position-absolute w-100 h-100 display-transition background-img bg-zoom"
        style='background-image: url("assets/imgs/backgrounds/`+ BG.pop() + `"); opacity:0;'>
    </div>`;
function addBG(){
    if(BG?.length>0){
        let div = document.createElement('div');
        div.classList.add('position-absolute' ,'w-100' ,'h-100' ,'display-transition' ,'background-img' ,'bg-zoom');
        let style =`background-image: url("assets/imgs/backgrounds/`+ BG.pop()+`");opacity:0;`;
        div.setAttribute('style',style);
        BGPanel.appendChild(div);
        let t = setTimeout(function () { addBG() }, 15000);
    }
}
addBG();

// var clocks = document.getElementsByClassName("date-time__clock");
// var days = document.getElementsByClassName("date-time__calendar");
var lite_clock = document.getElementById("clock-lite");
var lite_day = document.getElementById("day-lite");

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

    //let time = hh + ":" + mm;
    // clocks[0].innerText = time;
    // days[0].innerText = calendar;
    lite_clock.innerHTML = hh + `<span style="display:block;line-height:40px;">:</span>` + mm;
    lite_day.innerText = calendar;
    
    if (BGIndexNext >= BGPanel?.children?.length) BGIndexNext = 0;
    BGPanel.children[BGIndexNext].style.opacity = 1;
    BGPanel.children[BGIndex].style.opacity = 0;
    BGIndex += 1;
    BGIndexNext += 1;
    if (BGIndex >= BGPanel?.children?.length) {
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
