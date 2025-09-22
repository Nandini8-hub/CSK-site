// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting CSK Fan Hub!");
});

// Poll
function vote(choice) {
  const result = document.getElementById("poll-result");
  if (choice === "yes") {
    result.innerText = "💛 Fans believe CSK will win IPL 2025!";
  } else {
    result.innerText = "💙 Some fans think it’ll be tough!";
  }
}

// Back to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
