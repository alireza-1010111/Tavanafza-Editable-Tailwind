document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-btn");
  const products = document.querySelectorAll(".product");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // اول همه محصولات رو مخفی کن
      products.forEach((p) => p.classList.add("hidden"));

      // محصول انتخاب شده رو نمایش بده
      const selected = btn.getAttribute("data-product");
      document.getElementById(`product-${selected}`).classList.remove("hidden");
    });
  });
});
