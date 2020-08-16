{
    const aboutSection = document.getElementById("about");
    const startBtn = document.querySelector(".page-link");
    const footerYear = document.querySelector(".footer__year");

    const startBtnClickHandle = () => {
        window.scroll(0, aboutSection.offsetTop);
    };

    const init = () => {
        startBtn.addEventListener("click", startBtnClickHandle);
        footerYear.innerHTML = `${new Date().getFullYear()}`;
    };

    init();
}
