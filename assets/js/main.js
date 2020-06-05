document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {
        accordion: false
    });
});

window.addEventListener("load", (event) => {
    _tagScrollCorrect();
});

let _tagScrollCorrect = function () {
    let aurl = window.location.href.split("/");
    if (aurl[aurl.length - 1][0] == "#")
        window.scrollBy(0, -100);
};

window.onscroll = function () { myFunction(); };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
}