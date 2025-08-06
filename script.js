 // Countdown
  // Set target date
const eventDate = new Date("Aug 10, 2025 20:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff < 0) {
    document.getElementById("timer").innerHTML = "<b>कार्यक्रम शुरू हो चुका है!</b>";
    return;
  }

  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hrs = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const mins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const secs = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

  document.getElementById("cd-days").textContent = days;
  document.getElementById("cd-hrs").textContent = hrs;
  document.getElementById("cd-min").textContent = mins;
  document.getElementById("cd-sec").textContent = secs;
}, 1000);
