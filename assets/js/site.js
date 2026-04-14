const navToggle = document.querySelector("[data-copy-url]");

if (navToggle) {
  navToggle.addEventListener("click", async () => {
    const url = navToggle.getAttribute("data-copy-url");
    try {
      await navigator.clipboard.writeText(url);
      const original = navToggle.textContent;
      navToggle.textContent = "Link copied";
      setTimeout(() => {
        navToggle.textContent = original;
      }, 1800);
    } catch (error) {
      window.prompt("Copy this link:", url);
    }
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
