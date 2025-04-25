function displayImages(row, main, bedroom, bathroom, livingroom) {
    document.getElementById(`${row}-main-image`).src = main;
    document.getElementById(`${row}-bedroom-image`).src = bedroom;
    document.getElementById(`${row}-bathroom-image`).src = bathroom;
    document.getElementById(`${row}-livingroom-image`).src = livingroom;
}
function buyProperty(propertyName, price) {
    alert(`You are interested in purchasing ${propertyName} for $${price}.`);
    // Here you can add actual logic to process the purchase
}

