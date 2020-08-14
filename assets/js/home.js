{
    const aboutSection = document.getElementById("about");
    const startBtn = document.querySelector(".page-link");

    const startBtnClickHandle = () => {
        window.scroll(0, aboutSection.offsetTop);
    };

    const init = () => {
        startBtn.addEventListener("click", startBtnClickHandle);
    };

    init();
}
