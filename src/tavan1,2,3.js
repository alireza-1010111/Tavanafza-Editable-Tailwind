document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-btn");
  const products = document.querySelectorAll(".product");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      products.forEach((p) => p.classList.add("hidden"));

      buttons.forEach((b) => {
        b.classList.remove("bg-sky-500");
        b.classList.add("bg-gray-300");
      });

      const selected = btn.getAttribute("data-product");
      document.getElementById(`product-${selected}`).classList.remove("hidden");
      btn.classList.remove("bg-gray-300");
      btn.classList.add("bg-sky-500");
    });
  });
});
