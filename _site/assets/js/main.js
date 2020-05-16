document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {
        accordion: false
    });
});

window.onscroll = () => {
    let scroll = document.getElementById("scroll-indicator");
    if (!scroll) return;

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scroll.style.width = scrolled + "%";
};