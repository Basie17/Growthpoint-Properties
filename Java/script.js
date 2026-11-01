/* Growthpoint Properties - Image Gallery */

//Find all images inside the main content
const images = document.querySelectorAll("main img");

//create a larger image display
const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.display = "none";
lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.flexDirection = "column";
lightbox.style.zIndex = "1000";
lightbox.style.cursor = "pointer";

//create the enlarged image
const enlargedImage = document.createElement("img");

enlargedImage.style.maxWidth = "90%";
enlargedImage.style.maxHeight = "80%";
enlargedImage.style.objectFit = "contain";
enlargedImage.style.borderRadius = "8px";

//create the close message
const closeMessage = document.createElement("p");

closeMessage.textContent = "Click anywhere out the image to close";
closeMessage.style.color = "white";
closeMessage.style.fontFamily = "Arial, sans-serif";

//add elements to the lightbox
lightbox.appendChild(enlargedImage);
lightbox.appendChild(closeMessage);

//add the lightbox to the page
document.body.appendChild(lightbox);

//make each main image clickable
images.forEach(function (image) {
    image.style.cursor = "pointer";
    image.addEventListener("click", function () {
        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;

        lightbox.style.display = "flex";
    });
});

//close when the background is clicked
lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

/*Property Search Functionality*/

//find the search box and property headings
const propertySearch = document.getElementById("propertySearch");
const propertyItems = document.querySelectorAll(".propertyItem");
const searchMessage =document.getElementById("searchMessage");

//check whether the search box exists on this page
if (propertySearch) {
    propertySearch.addEventListener("input", function () {
        const searchText = propertySearch.value.toLowerCase();
        let matchingProperties = 0;

        propertyItems.forEach(function (item) {
            const propertyName = item.textContent.toLowerCase();
            if (propertyName.includes(searchText)) {
                item.style.display = "block";
                matchingProperties++;
            } else {
                item.style.display = "none";
            }
        });
            if (matchingProperties === 0) {
                searchMessage.textContent = "No matching property types found.";
            } else {
                searchMessage.textContent = "";
            }
    });
}

/* Enquiry Form Validation */

//Find the enquiry form
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    //check the form when the visitor submits ir
    enquiryForm.addEventListener("submit", function(event) {


        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const property = document.getElementById("property").value.trim();
        const message = document.getElementById("message").value.trim();

        //get the information enteredby the visitor
        const formMessage = document.getElementById("formMessage");

        //remove spaces and symbols from the phone number
        const phoneDigits = phone.replace(/\D/g, "");

        if (name === "" || email === "" || phone === "" || property === "" || message === "") {
            event.preventDefault();
            formMessage.textContent = "Please fill in all the fields.";
            formMessage.style.color = "red";
        }
        //check the phone number
        else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
            event.preventDefault();
            formMessage.textContent = "Please enter a correct phone number.";
            formMessage.style.color = "red";
        }
        else if (message.length < 10) {
            event.preventDefault();
            formMessage.textContent = "Please enter a longer message.";
            formMessage.style.color = "red";
        }
    });

    //clear the feedback message when the form is reset
    enquiryForm.addEventListener("reset", function() {
        document.getElementById("formMessage").textContent = "";
    });
}

/* Contact Form Validation */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const contactName = document.getElementById("contactname").value.trim();
        const contactEmail = document.getElementById("contactemail").value.trim();
        const contactMessage = document.getElementById("contactmessage").value.trim();

        if (contactName === "" || contactEmail === "" || contactMessage === "") {
            alert("Please complete all the fields.");
        }
        else if (contactMessage.length < 10) {
            alert("Please enter a longer message.");
        }
        else {
            alert("Thank you for contacting Growthpoint Properties!");
            contactForm.reset();
        }
    });
}