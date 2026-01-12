let countdownInterval;

document.getElementById("startBtn").addEventListener("click", () => {
  clearInterval(countdownInterval);
  const targetTime = new Date(document.getElementById("launchDate").value).getTime();

  countdownInterval = setInterval(() => {
    const now = Date.now();
    const remaining = targetTime - now;

    if (remaining <= 0) {
      document.getElementById("timerDisplay").textContent = "🎉 Launched!";
      clearInterval(countdownInterval);
      return;
    }

    const d = Math.floor(remaining / (1000*60*60*24));
    const h = Math.floor((remaining / (1000*60*60)) % 24);
    const m = Math.floor((remaining / (1000*60)) % 60);
    const s = Math.floor((remaining / 1000) % 60);

    document.getElementById("timerDisplay").textContent = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
});
