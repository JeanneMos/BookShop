export default function scrollSmoothToElement(element) {
  if (element) element.focus({ preventScroll: true });

  window.scrollTo({
    top: element?.offsetTop || 0,
    behavior: "smooth",
  });
}
