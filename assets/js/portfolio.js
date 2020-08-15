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
        const currrentActiveItem = document.querySelector(".tab__item.active");
        currrentActiveItem.classList.toggle("active");
        event.target.classList.toggle("active");
        moveFloatBar(left, width);
    };

    const resizeWindowBarHandle = () => {
        const currrentActiveItem = document.querySelector(".tab__item.active");
        const { offsetLeft: left, offsetWidth: width } = currrentActiveItem;
        moveFloatBar(left, width);
    };

    const init = () => {
        moveFloatBar(TabItems[0].offsetLeft, TabItems[0].offsetWidth);
        TabItems.forEach((item) => {
            item.addEventListener("click", tabItemClickHandle);
        });
        portfolioTab.removeEventListener("click", tabItemClickHandle);
        window.addEventListener("resize", resizeWindowBarHandle);
    };
    init();
}
