$(document).ready(function() {
    const loginBtn = document.querySelector("#loginBtn");

    loginBtn.addEventListener("click", () => {
        loggedIn = true;
        sessionStorage.setItem("loggedIn", true);

        // Add the animation class
        loginBtn.classList.add("btn-login");

        // Remove the animation class after the animation ends
        loginBtn.addEventListener("animationend", () => {
            loginBtn.classList.remove("btn-login");
        }, { once: true });
    }); 
});
