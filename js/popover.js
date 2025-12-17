document.addEventListener("DOMContentLoaded", () => {
  const total = 8;

  function hideAll() {
    for (let i = 1; i <= total; i++) {
      const card = document.getElementById(`infocard${i}`);
      if (card) card.classList.remove("visible");
      const infoCardClass = document.querySelector(`.infocard${i}`);
      if (infoCardClass) infoCardClass.classList.remove("visible");

      const hold = document.querySelector(`.hold${i}`);
      if (hold) hold.classList.remove("visible");
    }

    const displayImage = document.querySelector(".display-image");
    if (displayImage) displayImage.classList.remove("cover-hidden");
  }

  for (let i = 1; i <= total; i++) {
    const trigger = document.getElementById(`info${i}`);
    const popup = document.getElementById(`infocard${i}`) || document.querySelector(`.infocard${i}`);
    if (!trigger) continue;
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      hideAll();
      if (popup) {
        popup.classList.add("visible");
        const displayImage = document.querySelector(".display-image");
        if (displayImage) displayImage.classList.add("cover-hidden");
        const hold = document.querySelector(`.hold${i}`);
        if (hold) hold.classList.add("visible");
      }
    });
  }

  document.addEventListener("click", (e) => {
    const isInfo = e.target.closest('[id^="info"]');
    const isInfocard = e.target.closest('[class^="infocard"], [id^="infocard"]');
    if (!isInfo && !isInfocard) {
      hideAll();
    }
  });
});
