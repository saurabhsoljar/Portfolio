// Home section scroll functionality
var homeSection = document.querySelector(".home");
window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}

// Hire Me Button functionality
const hireBtn = document.getElementById("hireBtn");
const contactOptions = document.getElementById("contactOptions");

hireBtn.addEventListener("click", function (e) {
  contactOptions.style.display =
    contactOptions.style.display === "block" ? "none" : "block";
  e.stopPropagation();
});

// Close dropdown when clicking outside
document.addEventListener("click", function () {
  contactOptions.style.display = "none";
});

// Prevent dropdown from closing when clicking inside it
contactOptions.addEventListener("click", function (e) {
  e.stopPropagation();
});

// About section to download CV
document.getElementById("downloadBtn").addEventListener("click", function () {
  const resumeUrl =
    "https://drive.google.com/file/d/1lKvx_f6-5TRpOVpNM_3MgBavpsJ43iiR/view?usp=sharing";
  window.open(resumeUrl, "_blank", "noopener,noreferrer");
});

// Portfolio Section
var $galleryContainer = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});

$(".button-group .button").on("click", function () {
  $(".button-group .button").removeClass("active");
  $(this).addClass("active");

  var value = $(this).attr("data-filter");
  $galleryContainer.isotope({
    filter: value,
  });
});

// Magnific Popup
$(".gallery").magnificPopup({
  delegate: ".overlay a",
  type: "image",
  gallery: {
    enabled: true,
  },
});

// Testimonial Section
$(".testimonials-container").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTime: 2000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
});

// My Work Showcase (addEventListener) for open new window project
document.querySelectorAll(".overlay a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(link.href, "_blank", "noopener,noreferrer");
  });
});

// SMS Contact Handler
document.getElementById("smsContact").addEventListener("click", function () {
  const phoneNumber = "918789883658";
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    window.location.href = `sms:${phoneNumber}`;
  } else {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert("Phone number copied to clipboard!");
    });
  }
});

document.getElementById("mainContactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Form validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
  }

  try {
      // Use a free form handling service (replace with your own endpoint)
      const response = await fetch("https://formspree.io/f/mzzdgeal", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: name,
              email: email,
              message: message
          })
      });

      if (response.ok) {
          alert("Message sent successfully!");
          document.getElementById("mainContactForm").reset();
      } else {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to send message");
      }
  } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
  }
});

