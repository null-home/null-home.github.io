

var MenuPanel = document.getElementById('menu-panel');
var btnSHP = document.getElementById('btn-show-home-panel');

var isShow = false;
function showHomePanel() {
    if (isShow) {
        MenuPanel.style.display = 'none';
        btnSHP.style.display = 'block';
    }
    else {
        MenuPanel.style.display = 'block';
        btnSHP.style.display = 'none';
    }
    isShow = !isShow;
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
