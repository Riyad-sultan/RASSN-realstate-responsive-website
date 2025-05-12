// For Search button

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".search").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        let selectedLocation = document.getElementById("search").value;
        
        if (!selectedLocation) {
            alert("Please select a location before searching.");
        } else {
            alert("Searching for houses in " + selectedLocation);
            // Here, you can add further logic like redirecting to a search results page
        }
    });
});
