(function () {
  const deck = document.querySelector(".deck");
  const title = document.body.dataset.deckTitle || "AI+BI";
  const slidesData = window.AIBIBoldSlides || window.AIBISlides;

  function sectionForIndex(index) {
    return slidesData[index].section || "案例";
  }

  const slides = slidesData.map((item, index) => {
    const section = document.createElement("section");
    section.className = `slide${item.center ? " center" : ""}${item.bgRed ? " slide-red" : ""}`;
    section.innerHTML = `<div class="section-mark">${sectionForIndex(index)}</div>${item.html}`;
    section.setAttribute("aria-label", `${title} 第 ${index + 1} 页`);
    deck.appendChild(section);
    return section;
  });

  const counter = document.querySelector("#counter");
  const progressBar = document.querySelector(".progress-bar");
  let current = 0;

  function show(nextIndex) {
    current = Math.max(0, Math.min(slides.length - 1, nextIndex));
    slides.forEach((slide, index) => slide.classList.toggle("active", index === current));
    if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
    if (progressBar) progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
    document.title = `${title} - ${current + 1}`;
  }

  function next() {
    if (current >= slides.length - 1) return;
    show(current + 1);
  }

  function prev() {
    if (current <= 0) return;
    show(current - 1);
  }

  document.querySelector("#prev")?.addEventListener("click", prev);
  document.querySelector("#next")?.addEventListener("click", next);
  window.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") next();
    if (event.key === "ArrowLeft" || event.key === "PageUp") prev();
    if (event.key === "Home") show(0);
    if (event.key === "End") show(slides.length - 1);
  });

  show(0);
})();
