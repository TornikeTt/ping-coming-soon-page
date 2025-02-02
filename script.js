const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value === "") {
        errorMessage.innerText =
            "Whoops! It looks like you forgot to add your email";
        input.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = regex.test(input.value);

        if (isValid) {
            errorMessage.innerText = "";
            input.style.borderColor = "hsl(223, 100%, 88%)";
            input.style.value = "";
            setTimeout(() => {
                alert(
                    "You have successfully subscribed! Stay tuned for notifications. ✅"
                );
            });
        } else {
            input.style.borderColor = "hsl(354, 100%, 66%)";
            errorMessage.innerText = "Please provide a valid email address";
        }
    }
});
