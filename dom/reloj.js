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
      d.querySelector(dateLocal).textContent = `📅 dd/mm/aaaa`;
      d.querySelector(btnPlay).disabled = false;
      d.querySelector(btnStop).disabled = true;
    }
  });
}

export function alarm(sound, btnPlay, btnStop, isSound) {
  let alarmTempo;
  let isSongFinish;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;
  $alarm.onended = function () {
    d.querySelector(btnStop).disabled = true; // Botón Stop Deshabilitado
    d.querySelector(btnPlay).disabled = false; // Botón Play Habilitado
    d.querySelector(isSound).textContent = "No alarm ⏰";
  };

  d.querySelector(btnStop).disabled = true; // Botón Stop Deshabilitado desde el inicio

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      e.target.disabled = true; // Deshabilitamos el botón play
      d.querySelector(btnStop).disabled = false; // Habilitamos el botón Stop

      alarmTempo = setTimeout(() => {
        $alarm.play();
        d.querySelector(isSound).textContent = "Alarm Active ⏰";
      }, 2000);
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      clearTimeout(isSongFinish);
      $alarm.pause();
      $alarm.currentTime = 0;
      e.target.disabled = true; // Deshabilito el botón stop
      d.querySelector(btnPlay).disabled = false; // Vuelvo a habilitar el botón play
      d.querySelector(isSound).textContent = "No alarm ⏰";
    }
  });
}
