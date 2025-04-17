// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById("submit-button").addEventListener("click", function () {
    const contactPage = document.getElementById("contact-page");
    contactPage.innerHTML = "<p>Thank you for your message</p>";
    contactPage.querySelector("p").style.fontSize = "24px";
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
// Alternatively, you can use a CSS class to style the <p> element
const thankYouMessage = document.createElement("p");
thankYouMessage.textContent = "Thank you for your message";
thankYouMessage.classList.add("thank-you-message");
contactPage.innerHTML = ""; // Clear existing content
contactPage.appendChild(thankYouMessage);
