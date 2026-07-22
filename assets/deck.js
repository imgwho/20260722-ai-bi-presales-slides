(function () {
  const deck = document.querySelector(".deck");
  const title = document.body.dataset.deckTitle || "AI+BI";

  function sectionForIndex(index) {
    return window.AIBISlides[index].section || "案例";
  }

  const slides = window.AIBISlides.map((item, index) => {
    const section = document.createElement("section");
    section.className = `slide${item.center ? " center" : ""}`;
    section.innerHTML = `<div class="section-mark">${sectionForIndex(index)}</div>${item.html}`;
    section.setAttribute("aria-label", `${title} 第 ${index + 1} 页`);
    if (item.noSteps) {
      section.classList.add("no-steps");
    } else {
      applyProgressiveSteps(section);
    }
    setupVideoControls(section);
    deck.appendChild(section);
    return section;
  });

  const counter = document.querySelector("#counter");
  let current = 0;
  let step = 0;

  function applyProgressiveSteps(section) {
    const titleNodes = Array.from(section.querySelectorAll(".kicker, h1"));
    titleNodes.forEach(node => {
      node.classList.add("step-item");
      node.dataset.step = "0";
    });

    const quoteNodes = Array.from(section.querySelectorAll(".quote"));
    quoteNodes.forEach(node => {
      node.classList.add("step-item");
      node.dataset.step = "2";
    });

    Array.from(section.children).forEach(node => {
      if (node.classList.contains("section-mark") || node.classList.contains("kicker") || node.tagName === "H1" || node.classList.contains("quote")) return;
      if (node.querySelector(".kicker, h1")) {
        node.classList.add("step-item");
        node.dataset.step = "0";
        return;
      }
      node.classList.add("step-item");
      node.dataset.step = "1";
    });

    section.querySelectorAll("h2").forEach(node => {
      node.classList.add("step-item");
      node.dataset.step = "1";
    });

    section.querySelectorAll(".video-demo").forEach(node => {
      node.classList.add("step-item");
      node.dataset.step = "1";
    });
  }

  function setupVideoControls(section) {
    section.querySelectorAll(".video-demo").forEach(demo => {
      const video = demo.querySelector("video");
      const choices = Array.from(demo.querySelectorAll(".video-choice"));
      const speedButtons = Array.from(demo.querySelectorAll("[data-speed]"));

      choices.forEach(button => {
        button.addEventListener("click", () => {
          const currentRate = video.playbackRate;
          video.pause();
          video.src = button.dataset.video;
          video.playbackRate = currentRate;
          choices.forEach(item => item.classList.toggle("is-selected", item === button));
          video.load();
        });
      });

      speedButtons.forEach(button => {
        button.addEventListener("click", () => {
          video.playbackRate = Number(button.dataset.speed);
          speedButtons.forEach(item => item.classList.toggle("is-selected", item === button));
        });
      });
    });
  }

  function maxStepForSlide(slide) {
    const steps = Array.from(slide.querySelectorAll(".step-item")).map(node => Number(node.dataset.step || 0));
    return Math.max(0, ...steps);
  }

  function renderStep() {
    const active = slides[current];
    active.querySelectorAll(".step-item").forEach(node => {
      node.classList.toggle("is-visible", Number(node.dataset.step || 0) <= step);
    });
  }

  function show(nextIndex, nextStep = 0) {
    current = Math.max(0, Math.min(slides.length - 1, nextIndex));
    step = nextStep;
    slides.forEach((slide, index) => slide.classList.toggle("active", index === current));
    slides.forEach((slide, index) => {
      if (index !== current) {
        slide.querySelectorAll(".step-item").forEach(node => node.classList.remove("is-visible"));
      }
    });
    renderStep();
    counter.textContent = `${current + 1} / ${slides.length}`;
    document.title = `${title} - ${current + 1}`;
  }

  function next() {
    const maxStep = maxStepForSlide(slides[current]);
    if (step < maxStep) {
      step += 1;
      renderStep();
      return;
    }
    if (current >= slides.length - 1) return;
    show(current + 1, 0);
  }

  function prev() {
    if (step > 0) {
      step -= 1;
      renderStep();
      return;
    }
    if (current <= 0) return;
    const prevIndex = Math.max(0, current - 1);
    show(prevIndex, maxStepForSlide(slides[prevIndex]));
  }

  document.querySelector("#prev").addEventListener("click", prev);
  document.querySelector("#next").addEventListener("click", next);
  window.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") next();
    if (event.key === "ArrowLeft" || event.key === "PageUp") prev();
    if (event.key === "Home") show(0);
    if (event.key === "End") show(slides.length - 1);
  });

  show(0);
}());
