const galleryContainer = document.getElementById("galleryContainer");
const toggleGalleryBtn = document.getElementById("toggleGalleryBtn");
let galleryExpanded = false;

toggleGalleryBtn.addEventListener("click", () => {
  galleryExpanded = !galleryExpanded;
  if (galleryExpanded) {
    galleryContainer.classList.remove("max-h-52");
    galleryContainer.classList.add("max-h-fit");
    toggleGalleryBtn.textContent = "کمتر";
  } else {
    galleryContainer.classList.remove("max-h-fit");
    galleryContainer.classList.add("max-h-52");
    toggleGalleryBtn.textContent = "نمایش بیشتر";
  }
});

const galleryContainer2 = document.getElementById("galleryContainer2");
const toggleGalleryBtn2 = document.getElementById("toggleGalleryBtn2");
let galleryExpanded2 = false;

toggleGalleryBtn2.addEventListener("click", () => {
  galleryExpanded2 = !galleryExpanded2;
  if (galleryExpanded2) {
    galleryContainer2.classList.remove("max-h-52");
    galleryContainer2.classList.add("max-h-fit");
    toggleGalleryBtn2.textContent = "کمتر";
  } else {
    galleryContainer2.classList.remove("max-h-fit");
    galleryContainer2.classList.add("max-h-52");
    toggleGalleryBtn2.textContent = "نمایش بیشتر";
  }
});

const galleryContainer3 = document.getElementById("galleryContainer3");
const toggleGalleryBtn3 = document.getElementById("toggleGalleryBtn3");
let galleryExpanded3 = false;

toggleGalleryBtn3.addEventListener("click", () => {
  galleryExpanded3 = !galleryExpanded3;
  if (galleryExpanded3) {
    galleryContainer3.classList.remove("max-h-52");
    galleryContainer3.classList.add("max-h-fit");
    toggleGalleryBtn3.textContent = "کمتر";
  } else {
    galleryContainer3.classList.remove("max-h-fit");
    galleryContainer3.classList.add("max-h-52");
    toggleGalleryBtn3.textContent = "نمایش بیشتر";
  }
});
