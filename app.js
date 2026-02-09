if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("Service Worker registered"))
      .catch(err => console.log("SW failed", err));
  });
}


// Open popup when clicking any element with this class
document.querySelectorAll('.show-suspension').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('suspension-overlay').style.display = 'flex';
  });
});

// Close popup
document.getElementById('closeSuspension').addEventListener('click', () => {
  document.getElementById('suspension-overlay').style.display = 'none';
});
