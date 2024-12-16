// HTML structure to display the clock
const clockContainer = document.createElement("div");
clockContainer.style.fontFamily = "Arial, sans-serif";
clockContainer.style.fontSize = "48px";
clockContainer.style.textAlign = "center";
clockContainer.style.marginTop = "20vh";
clockContainer.id = "digitalClock";
document.body.appendChild(clockContainer);

// Function to format time to HH:MM:SS
function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("digitalClock").textContent = currentTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
