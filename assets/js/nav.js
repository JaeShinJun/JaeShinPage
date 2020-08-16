{
    const nav = document.querySelector(".nav");
    const navItems = document.querySelectorAll(".nav__item");

    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const portfolioSection = document.getElementById("portfolio");
    const contactSection = document.getElementById("contact");
    const goBackBtn = document.querySelector(".footer__go-back-btn");

    let isNavFixed;
    let isClicked = false;

    const navClickHandle = (event) => {
        const { target: clickedItem } = event;
        clickedItem.classList.add("clicked");
        isClicked = true;

        const {
            attributes: {
                dest: { nodeValue: dest },
            },
        } = clickedItem;

        const destSection = document.getElementById(dest);
        window.scroll(0, destSection.offsetTop);
        setTimeout(() => {
            isClicked = false;
            scrollPosHandle();
            clickedItem.classList.remove("clicked");
        }, 400);
    };

    const toggleNavFix = () => {
        nav.classList.toggle("nav__fixed");
    };

    const scrollPosHandle = (event) => {
        const curScrollPos = window.scrollY;
        const px2vh = parseInt(window.innerHeight) / 100;

        if (!isNavFixed && curScrollPos >= aboutSection.offsetTop) {
            toggleNavFix();
            isNavFixed = true;
        }
        if (isNavFixed && curScrollPos < aboutSection.offsetTop) {
            toggleNavFix();
            isNavFixed = false;
        }

        if (isClicked) return;

        if (curScrollPos < aboutSection.offsetTop) {
            nav.querySelector('[dest="home"]').classList.add("active");
            nav.querySelector('[dest="about"]').classList.remove("active");
            nav.querySelector('[dest="portfolio"]').classList.remove("active");
            nav.querySelector('[dest="contact"]').classList.remove("active");
        } else if (
            aboutSection.offsetTop <= curScrollPos &&
            curScrollPos < portfolioSection.offsetTop
        ) {
            nav.querySelector('[dest="home"]').classList.remove("active");
            nav.querySelector('[dest="about"]').classList.add("active");
            nav.querySelector('[dest="portfolio"]').classList.remove("active");
            nav.querySelector('[dest="contact"]').classList.remove("active");
        } else if (
            portfolioSection.offsetTop <= curScrollPos &&
            curScrollPos < contactSection.offsetTop - px2vh * 15
        ) {
            nav.querySelector('[dest="home"]').classList.remove("active");
            nav.querySelector('[dest="about"]').classList.remove("active");
            nav.querySelector('[dest="portfolio"]').classList.add("active");
            nav.querySelector('[dest="contact"]').classList.remove("active");
        } else if (contactSection.offsetTop - px2vh * 15 <= curScrollPos) {
            nav.querySelector('[dest="home"]').classList.remove("active");
            nav.querySelector('[dest="about"]').classList.remove("active");
            nav.querySelector('[dest="portfolio"]').classList.remove("active");
            nav.querySelector('[dest="contact"]').classList.add("active");
        }
    };

    const goBackBtnClickHandle = (event) => {
        window.scroll(0, homeSection.offsetTop);
    };

    const init = () => {
        isNavFixed = false;
        navItems.forEach((navItem) => {
            navItem.addEventListener("click", navClickHandle);
        });
        window.addEventListener("scroll", scrollPosHandle);
        goBackBtn.addEventListener("click", goBackBtnClickHandle);
    };

    init();
}
