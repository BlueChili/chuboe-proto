window.addEventListener("DOMContentLoaded", () => {
  const openTrigger = document.querySelector(".asPopOut");
  const closeTrigger = document.querySelector(".closePopOut");
  const accordionOverlay = document.querySelector(".accordion-overlay");
  !!openTrigger && openTrigger.addEventListener("click", function(e) {
    e.preventDefault();
    accordionOverlay.classList.add("active");
  });
  !!closeTrigger && closeTrigger.addEventListener("click", function(e) {
    console.log("close");
    accordionOverlay.classList.remove("active");
  });
})
