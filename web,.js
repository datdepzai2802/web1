var run = 0;
var chay;
var mang = [];
mang[0] = "img/ps5-anthem-overview-hero-desktop-02-en-22oct20.png";
mang[1] = "img/hitman3-screen-01-ps4-en-11mar21.jfif";
mang[2] = "img/ps4-pro-page-banner-hero-desktop-01-en-11aug20.jfif";
mang[3] ="img/resident-evil-8-hero-01-ps5-en-11aug20.jfif";

function auto() {
    run++;
    document.getElementById("img1").src = mang[run];
    if (run == mang.length - 1) {
        run = -1;
    }
    chay = setTimeout(auto, 2000);
}

window.onload = function () {
    chay = setTimeout(auto, 2000);
}   

function Stop() {
    clearTimeout(chay);
}

function Next() {
    run++;
    document.getElementById("img1").src = mang[run];
    if (run == mang.length - 1) {
        run = -1;
    }
}

function Pre() {
    run--;
    if (run < 0) {
        run = 3;
    }
    document.getElementById("img1").src = mang[run];
}

function First() {
    run = 0;
    document.getElementById("img1").src = mang[run];
    Stop();
}

function Last() {
    run = mang.length - 1;
    document.getElementById("img1").src = mang[run];
    Stop();
}