document.addEventListener("DOMContentLoaded", (event) => {
  const heroContainer = document.querySelector(".header__container");
  const headerSticky = document.querySelector(".header_sticky");
  const children = heroContainer.children;

  let secondChild = children[2];
  let secondChildTop = secondChild.offsetTop;

  const initialWidth = 691; // Initial width of the image
  const finalWidth = 1163; // Final width of the image

  function handleScroll(event) {
    const scalingImage = document.querySelector(".header_sticky img");

    const scrollPosition = window.scrollY;

    let widthValue =
      initialWidth +
      (finalWidth - initialWidth) * (scrollPosition / secondChildTop);

    if (scrollPosition >= secondChildTop) {
      widthValue = finalWidth;
    }

    scalingImage.style.width = `${widthValue}px`;
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
});
