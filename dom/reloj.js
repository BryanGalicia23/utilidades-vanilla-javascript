const d = document;

export function digitalClock(dateLocal, clock, btnPlay, btnStop) {
  let clockTempo;
  d.querySelector(btnStop).disabled = true;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).textContent = `${clockHour}`;
      }, 1000);

      let date = new Date().toLocaleDateString();
      d.querySelector(dateLocal).textContent = `📅 ${date}`;
      d.querySelector(btnStop).disabled = false;

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).textContent = "Digital Clock";
      d.querySelector(btnPlay).disabled = false;
      d.querySelector(btnStop).disabled = true;
    }
  });
}

export function alarm(sound, btnPlay, btnStop, isSound) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.querySelector(btnStop).disabled = true;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;

      alarmTempo = setTimeout(() => {
        $alarm.play();
        d.querySelector(isSound).textContent = "Alarm Active ⏰";
      }, 2000);

      setTimeout(() => {
        d.querySelector(btnPlay).disabled = false;
        d.querySelector(btnStop).disabled = true;
      }, 20000);
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      e.target.disabled = true;
      d.querySelector(btnPlay).disabled = false;
      d.querySelector(isSound).textContent = "No alarm ⏰";
    }
  });
}
