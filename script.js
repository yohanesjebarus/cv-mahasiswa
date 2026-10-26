
const themeButton = document.getElementById("themeButton");
const emailButton = document.getElementById("emailButton");
const emailText = document.getElementById("email");
const message = document.getElementById("message");
const year = document.getElementById("year");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

year.textContent = new Date().getFullYear();

emailButton.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText(emailText.textContent);
        message.textContent = "Email berhasil disalin!";
    } catch (error) {
        message.textContent =
            "Silakan salin email secara manual: " +
            emailText.textContent;
    }
});
