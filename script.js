// Минимальный JS: подсветка кнопок после клика
document.querySelectorAll("a.btn").forEach((a) => {
  a.addEventListener("click", () => {
    a.style.boxShadow = "0 0 0 2px rgba(99, 102, 241, 0.55)";
    setTimeout(() => {
      a.style.boxShadow = "";
    }, 600);
  });
});

