const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).textContent = `${clockHour}`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).textContent = "Digital Clock";
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm() {}
