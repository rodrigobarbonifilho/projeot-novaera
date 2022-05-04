let phoneContainer = document.getElementById("phone-contact");
let emailContainer = document.getElementById("email-contact");
let yesButtonPhone = document.getElementById("yes-button-phone");
let noButtonPhone = document.getElementById("no-button-phone");
let yesButtonEmail = document.getElementById("yes-button-email");
let noButtonEmail = document.getElementById("no-button-email");
let yesButtons = [yesButtonPhone, yesButtonEmail];
let noButtons = [noButtonPhone, noButtonEmail];

yesButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        var btnType = btn.id.split("-");
        console.log(btnType);
        if (btnType[2] === "phone") {
            phoneContainer.classList.toggle("expanded", true);
            emailContainer.classList.toggle("expanded", false);
        } else {
            emailContainer.classList.toggle("expanded", true);
            phoneContainer.classList.toggle("expanded", false);
        }
    })
})

noButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.body.focus();
        phoneContainer.classList.toggle("expanded", false);
        emailContainer.classList.toggle("expanded", false);
    })
})