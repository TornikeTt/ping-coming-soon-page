const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".errorMessage");
const notify_button = document.querySelector('button[type="submit"]');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Log "hello" if viewport width is less than 375px

    if (input.value === "") {
        if (window.innerWidth <= 375) {
            notify_button.style.marginTop = "30px";
        }

        errorMessage.innerText =
            "Whoops! It looks like you forgot to add your email";
        input.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = regex.test(input.value);

        if (isValid) {
            notify_button.style.marginTop = "0px";

            errorMessage.innerText = "";
            input.style.borderColor = "hsl(223, 100%, 88%)";
            input.style.value = "";

            setTimeout(() => {
                alert(
                    "You have successfully subscribed! Stay tuned for notifications. ✅"
                );
            });
        } else {
            if (window.innerWidth <= 375) {
                notify_button.style.marginTop = "30px";
            }

            input.style.borderColor = "hsl(354, 100%, 66%)";
            errorMessage.innerText = "Please provide a valid email address";
        }
    }
});
