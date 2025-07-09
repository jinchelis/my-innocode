// hiện/ẩn các thẻ
const toggleGrid = document.querySelector(".grid.cards.toggle");
const toggleBtn = document.querySelector(".show-more-btn");

if (toggleGrid && toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    toggleGrid.classList.toggle("expanded");
    toggleBtn.textContent = toggleGrid.classList.contains("expanded")
      ? "Thu gọn"
      : "Xem thêm";
  });
}

// button Tìm kiếm
const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-btn");

if (searchInput && searchBtn) {
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      console.log("Tìm kiếm: " + searchInput.value);
      window.location.hash = "#!" + encodeURIComponent(searchInput.value);
    }
  });
}
