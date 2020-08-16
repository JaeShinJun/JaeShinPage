{
    const contactForm = document.querySelector(".contact-form");
    const inputName = contactForm.querySelector(".form__name");
    const inputEmail = contactForm.querySelector(".form__email");
    const textareaMessage = contactForm.querySelector(".form__message");

    const contactFormSubmitHandle = async (event) => {
        event.preventDefault();
        const data = {
            name: inputName.value,
            email: inputEmail.value,
            message: textareaMessage.value,
        };
        const result = await fetch(
            "https://formspree.io/jsstar1207@gmail.com",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Referrer-Policy": "no-referrer",
                    "Access-Control-Allow-Origin": "*",
                },
                body: { message: JSON.stringify(data) },
            }
        ).then((res) => {
            return res.json();
        });
        console.log(result);
    };

    const init = () => {
        contactForm.addEventListener("submit", contactFormSubmitHandle);
    };

    init();
}
