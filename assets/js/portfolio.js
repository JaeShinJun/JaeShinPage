{
    const floatBar = document.querySelector(".float-bar");
    const floatBarTab = floatBar.querySelector(".portfolio__tab");
    const portfolioTab = document.querySelector(".portfolio__tab");
    const tabItems = portfolioTab.querySelectorAll(".tab__item");
    const galleryContainer = document.querySelector(".portfolio__gallery");
    const galleryItems = galleryContainer.querySelectorAll(".gallery__item");

    let order = -1;

    const moveFloatBar = (left, width) => {
        floatBar.setAttribute("style", `left:${left}px; width:${width}px`);
        floatBarTab.setAttribute("style", `left:-${left}px;`);
    };

    const tabItemClickHandle = (event) => {
        const {
            target: {
                offsetLeft: left,
                offsetWidth: width,
                innerHTML: category,
            },
        } = event;

        const currrentActiveItem = document.querySelector(".tab__item.active");
        currrentActiveItem.classList.toggle("active");
        event.target.classList.toggle("active");
        moveFloatBar(left, width);

        if (category === "ALL") {
            galleryItems.forEach((item) => {
                item.classList.add("hide");
            });
            setTimeout(() => {
                galleryItems.forEach((item) => {
                    item.classList.remove("hide");
                    item.classList.add("show");
                });
            }, 200);
        } else {
            galleryItems.forEach((item) => {
                item.classList.add("hide");
            });
            setTimeout(() => {
                galleryItems.forEach((item) => {
                    if (item.classList.contains(category)) {
                        item.classList.remove("hide");
                        item.classList.add("show");
                    } else {
                        item.classList.remove("show");
                        item.classList.add("hide");
                    }
                });
            }, 200);
        }
    };

    const resizeWindowBarHandle = () => {
        const currrentActiveItem = document.querySelector(".tab__item.active");
        const { offsetLeft: left, offsetWidth: width } = currrentActiveItem;
        moveFloatBar(left, width);
    };

    const init = () => {
        moveFloatBar(tabItems[0].offsetLeft, tabItems[0].offsetWidth);
        tabItems.forEach((item) => {
            item.addEventListener("click", tabItemClickHandle);
        });
        portfolioTab.removeEventListener("click", tabItemClickHandle);
        window.addEventListener("resize", resizeWindowBarHandle);
    };
    init();
}
