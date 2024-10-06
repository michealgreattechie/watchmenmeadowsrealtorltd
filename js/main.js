(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".nav-bar").addClass("sticky-top");
    } else {
      $(".nav-bar").removeClass("sticky-top");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  // Check if the user has already accepted cookies
  if (!localStorage.getItem("cookiesAccepted")) {
    cookiePopup.style.display = "block"; // Show the popup
  }

  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true"); // Save the user's consent
    cookiePopup.style.display = "none"; // Hide the popup
  });
});

// Initialize EmailJS
(function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your User ID
})();

function toggleChat() {
  const chat = document.getElementById("live-chat");
  chat.style.display =
    chat.style.display === "none" || chat.style.display === ""
      ? "block"
      : "none";
}

function sendMessage() {
  const userMessage = document.getElementById("user-message").value;
  const chatBody = document.getElementById("chat-body");

  if (userMessage.trim() === "") return; // Prevent sending empty messages

  // Display user message
  chatBody.innerHTML += `<div class="message user-message">${userMessage}</div>`;

  // Clear input
  document.getElementById("user-message").value = "";

  // Send email
  sendEmail(userMessage);

  // Simulate bot response
  setTimeout(() => {
    chatBody.innerHTML += `<div class="message bot-message">Thank you for your message!</div>`;
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
  }, 1000);
}

function sendEmail(message) {
  const templateParams = {
    message: message,
    to_email: "YOUR_EMAIL@example.com", // Replace with your email
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
    (response) => {
      console.log("Email sent successfully!", response.status, response.text);
    },
    (err) => {
      console.error("Failed to send email:", err);
    }
  );
}

function handleClick() {
  // Custom confirmation to redirect user to a phone call
  const userChoice = confirm(
    "Hello, welcome to our site, Can't find what you're looking for, will you like to place a call?"
  );

  // If the user clicks "OK", redirect them to the phone number
  if (userChoice) {
    window.location.href = "tel:+2348103757943"; // Replace with your actual phone number
  }
}
