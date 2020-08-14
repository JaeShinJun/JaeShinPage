{
    const floatBar = document.querySelector(".float-bar");
    const floatBarTab = floatBar.querySelector(".portfolio__tab");
    const portfolioTab = document.querySelector(".portfolio__tab");
    const TabItems = portfolioTab.querySelectorAll(".tab__item");

    const moveFloatBar = (left, width) => {
        floatBar.setAttribute("style", `left:${left}px; width:${width}px`);
        floatBarTab.setAttribute("style", `left:-${left}px;`);
    };

    const tabItemClickHandle = (event) => {
        const {
            target: { offsetLeft: left, offsetWidth: width },
        } = event;
        moveFloatBar(left, width);
    };

    const init = () => {
        console.log(portfolioTab);
        moveFloatBar(TabItems[0].offsetLeft, TabItems[0].offsetWidth);
        TabItems.forEach((item) => {
            console.log(item);
            addEventListener("click", tabItemClickHandle);
        });
        portfolioTab.removeEventListener("click", tabItemClickHandle);
    };
    init();
}
