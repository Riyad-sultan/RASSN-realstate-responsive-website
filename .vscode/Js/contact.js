document.querySelector(".call-button").addEventListener("click", function () {
    // Replace with the primary phone number you want to call
    let phoneNumber = "+251-975419421";

    // Open dialer with the phone number
    window.location.href = `tel:${phoneNumber}`;
});
