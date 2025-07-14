// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Tab functionality
const tabButtons = document.querySelectorAll(".tab-button");
const productSections = document.querySelectorAll(".product-section");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product");

    // Remove active class from all buttons and sections
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    productSections.forEach((section) => section.classList.remove("active"));

    // Add active class to clicked button and corresponding section
    button.classList.add("active");
    document.getElementById(productId).classList.add("active");
  });
});

// Contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("product").value;
  const message = document.getElementById("message").value;

  const productNames = {
    tavan1: "توان ۱ - کنترل کلاچ",
    tavan2: "توان ۲ - کنترل گاز و ترمز",
    tavan3: "توان ۳ - کنترل کامل",
  };

  alert(
    `درخواست شما با موفقیت ارسال شد.\n\nنام: ${name}\nتلفن: ${phone}\nمحصول: ${productNames[product] || "نامشخص"}\nپیام: ${message}\n\nبه زودی با شما تماس خواهیم گرفت.`,
  );

  contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});
