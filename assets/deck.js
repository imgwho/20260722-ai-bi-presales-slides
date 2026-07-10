(function () {
  const deck = document.querySelector(".deck");
  const title = document.body.dataset.deckTitle || "AI+BI";

  function sectionForIndex(index) {
    if (index === 0) return "封面";
    if (index === 1) return "目录";
    if (index >= 2 && index <= 6) return "第一部分 · 为什么 BI 变成一堆图";
    if (index >= 7 && index <= 9) return "第二部分 · 从图表走向产品";
    if (index === 10) return "第三部分 · 方案对比";
    if (index >= 11 && index <= 12) return "第四部分 · AI+BI 重构思路";
    if (index >= 13 && index <= 16) return "第五部分 · Codex 打通 BI";
    if (index >= 17 && index <= 18) return "第六部分 · 副业与接单";
    return "结论";
  }

  const slides = window.AIBISlides.map((item, index) => {
    const section = document.createElement("section");
    section.className = `slide${item.center ? " center" : ""}`;
    section.innerHTML = `<div class="section-mark">${sectionForIndex(index)}</div>${item.html}`;
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
