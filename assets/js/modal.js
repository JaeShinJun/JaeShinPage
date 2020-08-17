{
    const galleryItems = document.querySelectorAll(".item__wrapper");
    const masks = document.querySelectorAll(".mask");
    const carouselSliders = document.querySelectorAll(".carousel__slider");
    let modalContainers = {};

    const resizeCarouselHandle = (event) => {
        document
            .querySelectorAll(".portfolio__modal-container")
            .forEach((container) => {
                const imagesContainer = container.querySelector(
                    ".carousel__images"
                );
                const images = imagesContainer.querySelectorAll(".images__img");
                imagesContainer.style.width = `${
                    100 * imagesContainer.childElementCount
                }%`;
                images.forEach((image) => {
                    image.setAttribute(
                        "style",
                        `width:${100 / imagesContainer.childElementCount}%;`
                    );
                });
            });
    };

    const sliderLeftBtnClickHandle = (event) => {
        const {
            currentTarget: {
                parentNode: {
                    parentNode: { firstElementChild: imagesContainer },
                },
            },
        } = event;

        const { offsetWidth } = imagesContainer.querySelector(".images__img");

        const imageSize = parseInt(offsetWidth, 10);

        const currentPosition = imagesContainer.getAttribute("position")
            ? parseInt(imagesContainer.getAttribute("position"), 10)
            : 0;

        if (currentPosition >= 1) {
            imagesContainer.setAttribute(
                "style",
                `transform: translateX(${
                    -imageSize * (currentPosition - 1)
                }px); width: ${100 * imagesContainer.childElementCount}%;`
            );
            imagesContainer.setAttribute("position", `${currentPosition - 1}`);
        }
    };

    const sliderRightBtnClickHandle = (event) => {
        const {
            currentTarget: {
                parentNode: {
                    parentNode: { firstElementChild: imagesContainer },
                },
            },
        } = event;

        const { offsetWidth } = imagesContainer.querySelector(".images__img");

        const imageSize = parseInt(offsetWidth, 10);

        const currentPosition = imagesContainer.getAttribute("position")
            ? parseInt(imagesContainer.getAttribute("position"), 10)
            : 0;

        if (currentPosition + 1 < imagesContainer.childElementCount) {
            imagesContainer.setAttribute(
                "style",
                `transform: translateX(${
                    -imageSize * (currentPosition + 1)
                }px); width: ${100 * imagesContainer.childElementCount}%;`
            );
            imagesContainer.setAttribute("position", `${currentPosition + 1}`);
        }
    };

    const modalShowBtnClickHandle = (event) => {
        const {
            target: {
                parentNode: { id },
            },
        } = event;
        const modalContainer = modalContainers[`${id}-modal`];
        modalContainer.setAttribute("style", "display: flex;");
        modalContainer.classList.add("show");

        const modal = modalContainer.querySelector(".modal");
        modal.classList.add("show");
    };

    const modalExit = (modalContainer, modal) => {
        modal.classList.remove("show");
        modal.classList.add("hide");

        modalContainer.classList.remove("show");
        modalContainer.classList.add("hide");

        setTimeout(() => {
            modal.classList.remove("hide");
            modalContainer.classList.remove("hide");
        }, 1000);
    };

    const modalExitBtnClickHandle = (event) => {
        const {
            currentTarget: {
                parentNode: {
                    parentNode: { parentNode: modal },
                },
            },
        } = event;
        const { parentNode: modalContainer } = modal;
        modalExit(modalContainer, modal);
    };

    const modalMaskClickHandle = (event) => {
        const {
            target: {
                parentNode: modalContainer,
                nextSibling: { nextSibling: modal },
            },
        } = event;
        modalExit(modalContainer, modal);
    };

    const init = () => {
        document
            .querySelectorAll(".portfolio__modal-container")
            .forEach((container) => {
                modalContainers[`${container.id}`] = container;

                const imagesContainer = container.querySelector(
                    ".carousel__images"
                );
                const images = imagesContainer.querySelectorAll(".images__img");
                imagesContainer.style.width = `${
                    100 * imagesContainer.childElementCount
                }%`;
                images.forEach((image) => {
                    image.setAttribute(
                        "style",
                        `width:${100 / imagesContainer.childElementCount}%;`
                    );
                });

                const exitBtn = container.querySelector(".more__exit-btn");
                exitBtn.addEventListener("click", modalExitBtnClickHandle);
            });
        galleryItems.forEach((item) => {
            const showBtn = item.querySelector(".item__show-btn");
            showBtn.addEventListener("click", modalShowBtnClickHandle);
        });
        masks.forEach((mask) => {
            mask.addEventListener("click", modalMaskClickHandle);
        });
        carouselSliders.forEach((slider) => {
            const leftBtn = slider.querySelector(".slider__left-btn");
            const rightBtn = slider.querySelector(".slider__right-btn");
            leftBtn.addEventListener("click", sliderLeftBtnClickHandle);
            rightBtn.addEventListener("click", sliderRightBtnClickHandle);
        });
        window.addEventListener("resize", resizeCarouselHandle);
    };

    init();
}
