const shareButton = document.getElementById("share-button");
const shareModal = document.querySelector(".share-modal");
const UserSection = document.querySelector(".article-author-container");
const shareContainer = document.querySelector(".article-meta");

function closeShareModal() {
  shareButton.classList.remove("active");
  shareModal.classList.remove("active");
  shareModal.classList.remove("absolute");
  shareContainer.classList.remove("bg-change");
  shareContainer.classList.remove("bg-absolute");
  UserSection.classList.remove("inactive");
}

// Click handler
shareButton.addEventListener("click", () => {
  const width = window.innerWidth;

  shareButton.classList.toggle("active");
  shareModal.classList.toggle("active");
  shareContainer.classList.toggle("bg-change");

  if (width > 864) {
    shareModal.classList.toggle("absolute");
    shareContainer.classList.toggle("bg-absolute");
    UserSection.classList.remove("inactive");
  } else {
    UserSection.classList.toggle("inactive");
  }
});

// Resize handler: close modal only if width hits exactly 864
let previousWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const currentWidth = window.innerWidth;

  if (shareModal.classList.contains("active")) {
    if (
      (previousWidth < 864 && currentWidth >= 864) ||
      (previousWidth > 864 && currentWidth <= 864)
    ) {
      closeShareModal();
    }
  }

  previousWidth = currentWidth; // update for next comparison
});
