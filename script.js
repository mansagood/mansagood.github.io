const navLinks = Array.from(document.querySelectorAll(".nav-btn"));
const sections = navLinks.map((link) =>
  document.querySelector(link.getAttribute("href"))
);
const highlightBtn = document.getElementById("highlightBtn");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === id);
      });
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

sections.forEach((section) => observer.observe(section));

highlightBtn.addEventListener("click", () => {
  document
    .querySelectorAll(".pill, .timeline-item, section")
    .forEach((el) => el.classList.add("highlight"));
  setTimeout(() => {
    document
      .querySelectorAll(".highlight")
      .forEach((el) => el.classList.remove("highlight"));
  }, 900);
});
