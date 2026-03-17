const downloadBtnTop = document.getElementById("downloadBtnTop");
const downloadSection = document.getElementById("download");
const downloadLink = document.getElementById("downloadLink");
const downloadMessage = document.getElementById("downloadMessage");
const playInfoBtn = document.getElementById("playInfoBtn");
const structureSection = document.querySelector(".structure");

// Переход к блоку "Скачать" с верхней кнопки
if (downloadBtnTop && downloadSection) {
  downloadBtnTop.addEventListener("click", () => {
    downloadSection.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// Переход к описанию структуры игры
if (playInfoBtn && structureSection) {
  playInfoBtn.addEventListener("click", () => {
    structureSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// Сообщение после клика по кнопке скачивания
if (downloadLink && downloadMessage) {
  downloadLink.addEventListener("click", () => {
    const now = new Date();
    const time =
      String(now.getHours()).padStart(2, "0") +
      ":" +
      String(now.getMinutes()).padStart(2, "0");

    downloadMessage.textContent =
      "APK‑файл загружается на устройство. Если установка не началась автоматически, откройте файл вручную в загрузках. Время: " +
      time;

    downloadMessage.style.color = "#a5b4fc";
  });
}

