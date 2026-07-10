(function () {
  const deck = document.querySelector(".deck");
  const title = document.body.dataset.deckTitle || "AI+BI";
  const slides = window.AIBISlides.map((item, index) => {
    const section = document.createElement("section");
    section.className = `slide${item.center ? " center" : ""}`;
    section.innerHTML = item.html;
    section.setAttribute("aria-label", `${title} 第 ${index + 1} 页`);
    deck.appendChild(section);
    return section;
  });

  const counter = document.querySelector("#counter");
  let current = 0;

  function show(nextIndex) {
    current = Math.max(0, Math.min(slides.length - 1, nextIndex));
    slides.forEach((slide, index) => slide.classList.toggle("active", index === current));
    counter.textContent = `${current + 1} / ${slides.length}`;
    document.title = `${title} - ${current + 1}`;
  }

  document.querySelector("#prev").addEventListener("click", () => show(current - 1));
  document.querySelector("#next").addEventListener("click", () => show(current + 1));
  window.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") show(current + 1);
    if (event.key === "ArrowLeft" || event.key === "PageUp") show(current - 1);
    if (event.key === "Home") show(0);
    if (event.key === "End") show(slides.length - 1);
  });

  show(0);
}());
