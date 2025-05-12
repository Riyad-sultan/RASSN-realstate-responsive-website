// For Image
function displayImages(row, mainImg, bedroomImg, bathroomImg, livingroomImg) {
    // Find and update the images inside the given row section
    document.getElementById(row + "-main-image").src = mainImg;
    document.getElementById(row + "-bedroom-image").src = bedroomImg;
    document.getElementById(row + "-bathroom-image").src = bathroomImg;
    document.getElementById(row + "-livingroom-image").src = livingroomImg;
}

//  For buy button
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".buy-button").forEach(button => {
        button.addEventListener("click", function() {
            let homeItem = this.closest(".property-item"); // Find the nearest property item
            let homeName = homeItem.querySelector("h2").textContent;
            let homePrice = homeItem.querySelector("p").textContent;
            let buyerName = prompt("Enter your name:");
            let buyerEmail = prompt("Enter your email:");
            if (buyerName && buyerEmail) {
                alert("Thank you, " + buyerName + "! You are purchasing " + homeName + " for " + homePrice + ". We will contact you at " + buyerEmail + " regarding your purchase.");
            } else {
                alert("Please enter valid details to proceed.");
            }
        });
    });
});



// for post comment button
document.querySelectorAll(".property-item").forEach(propertyItem => {
    let comments = [];

    let postBtn = propertyItem.querySelector(".post-btn");
    let commentInput = propertyItem.querySelector(".comment-input");
    let latestComment = propertyItem.querySelector(".latest-comment");
    let viewAllBtn = propertyItem.querySelector(".view-all-btn");
    let backToLatestBtn = propertyItem.querySelector(".back-to-latest-btn");
    let commentList = propertyItem.querySelector(".comment-list"); // Added for listing comments

    // Event listener for posting comments
    postBtn.addEventListener("click", function () {
        if (commentInput.value.trim() !== "") {
            // Save the new comment for this property
            comments.push(commentInput.value);

            // Display only the latest comment
            latestComment.innerText = commentInput.value;

            // Show "View All" button if there are multiple comments
            if (comments.length > 1) {
                viewAllBtn.style.display = "block";
            }

            // Create a new comment element and append to the list
            const newComment = document.createElement("p");
            newComment.textContent = commentInput.value;
            commentList.appendChild(newComment);

            // Clear input field
            commentInput.value = "";
        } else {
            alert("Please write a comment before posting!");
        }
    });

    // Event listener for viewing all comments
    viewAllBtn.addEventListener("click", function () {
        latestComment.innerHTML = comments.map(comment => `<div>${comment}</div>`).join("");

        this.style.display = "none";
        backToLatestBtn.style.display = "block";
    });

    // Event listener for returning to latest comment view
    backToLatestBtn.addEventListener("click", function () {
        latestComment.innerText = comments[comments.length - 1];

        this.style.display = "none";
        viewAllBtn.style.display = "block";
    });
});





// For View-Detail button
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".view").forEach(button => {
        button.addEventListener("click", function() {
            let propertyItem = this.closest(".property-item"); // Find the nearest property
            let details = propertyItem.querySelector(".details");
            
            // Toggle visibility of details
            details.style.display = (details.style.display === "none") ? "block" : "none";
        });
    });
});

// for Search property
{
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".btn").addEventListener("click", function(event) {
            let location = document.querySelector("input[placeholder='Location']").value.trim();
            let city = document.querySelector("input[placeholder='city']").value.trim();
    
            if (!location || !city) {
                event.preventDefault(); // Stop form submission
                alert("Please enter both location and city to search for properties.");
            }
        });
    });
    
}


  