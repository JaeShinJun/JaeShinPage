{
    const galleryItems = document.querySelectorAll(".item__wrapper");
    let modalContainers = {};

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

    const modalExitBtnClickHandle = (event) => {
        const {
            currentTarget: {
                parentNode: { parentNode: modal },
            },
        } = event;
        modal.classList.remove("show");
        modal.classList.add("hide");

        const { parentNode: modalContainer } = modal;
        modalContainer.classList.remove("show");
        modalContainer.classList.add("hide");

        setTimeout(() => {
            modal.classList.remove("hide");
            modalContainer.classList.remove("hide");
        }, 1000);
    };

    const init = () => {
        document
            .querySelectorAll(".portfolio__modal-container")
            .forEach((container) => {
                modalContainers[`${container.id}`] = container;

                const exitBtn = container.querySelector(".more__exit-btn");
                exitBtn.addEventListener("click", modalExitBtnClickHandle);
            });
        galleryItems.forEach((item) => {
            const showBtn = item.querySelector(".item__show-btn");
            showBtn.addEventListener("click", modalShowBtnClickHandle);
        });
    };

    init();
}
