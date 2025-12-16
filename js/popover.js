// Toggle infocard visibility: clicking #infoN shows #infocardN and hides others
document.addEventListener("DOMContentLoaded", () => {
  const total = 8;

  function hideAll() {
    for (let i = 1; i <= total; i++) {
      const card = document.getElementById(`infocard${i}`);
      if (card) card.classList.remove("visible");
      const infoCardClass = document.querySelector(`.infocard${i}`);
      if (infoCardClass) infoCardClass.classList.remove("visible");
      // also hide hold images
      const hold = document.querySelector(`.hold${i}`);
      if (hold) hold.classList.remove("visible");
    }
    // show cover image again when nothing is visible
    const displayImage = document.querySelector(".display-image");
    if (displayImage) displayImage.classList.remove("cover-hidden");
  }

  // map button ids (#info1..#info8) to matching popup ids (#infocard1..#infocard8)
  for (let i = 1; i <= total; i++) {
    const trigger = document.getElementById(`info${i}`);
    const popup = document.getElementById(`infocard${i}`) || document.querySelector(`.infocard${i}`);
    if (!trigger) continue;
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      hideAll();
      if (popup) {
        popup.classList.add("visible");
        // hide the cover image when specific infocard is shown
        const displayImage = document.querySelector(".display-image");
        if (displayImage) displayImage.classList.add("cover-hidden");
        // show corresponding hold image if present
        const hold = document.querySelector(`.hold${i}`);
        if (hold) hold.classList.add("visible");
      }
    });
  }

  // Optional: hide all when clicking outside any .infocard or .info button
  document.addEventListener("click", (e) => {
    const isInfo = e.target.closest('[id^="info"]');
    const isInfocard = e.target.closest('[class^="infocard"], [id^="infocard"]');
    if (!isInfo && !isInfocard) {
      hideAll();
    }
  });
});
