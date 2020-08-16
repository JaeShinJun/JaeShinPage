{
    const contactForm = document.querySelector(".contact-form");
    const inputName = contactForm.querySelector(".form__name");
    const inputEmail = contactForm.querySelector(".form__email");
    const textareaMessage = contactForm.querySelector(".form__message");
    const successDiv = document.querySelector(".success");
    const successMessage = successDiv.querySelector(".success__message");
    const successMask = successDiv.querySelector(".success__mask");
    const successMessageExitBtn = successDiv.querySelector(
        ".message__exit-btn"
    );

    const submitSuccessHandle = () => {
        successDiv.setAttribute("style", "display: flex;");
        successDiv.classList.add("show");

        successMessage.classList.add("show");
    };

    const successMessageExitHandle = () => {
        successDiv.classList.remove("show");
        successDiv.classList.add("hide");

        successMessage.classList.remove("show");
        successMessage.classList.add("hide");

        setTimeout(() => {
            successDiv.classList.remove("hide");
            successMessage.classList.remove("hide");
        }, 1000);
    };

    const contactFormSubmitHandle = async (event) => {
        event.preventDefault();
        const data = {
            name: inputName.value,
            email: inputEmail.value,
            message: textareaMessage.value,
        };
        const result = await fetch("https://formspree.io/xaypkgdj", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                submitSuccessHandle();
            })
            .catch((error) => console.error("Error:", error));
    };

    const init = () => {
        contactForm.addEventListener("submit", contactFormSubmitHandle);
        successMask.addEventListener("click", successMessageExitHandle);
        successMessageExitBtn.addEventListener(
            "click",
            successMessageExitHandle
        );
    };

    init();
}
