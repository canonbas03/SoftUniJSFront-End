document.addEventListener("DOMContentLoaded", solve);

function solve() {
  const formEls = document.querySelectorAll("form");

  for (const formEl of formEls) {
    formEl.addEventListener("submit", handleFormSubmition);
  }

  function handleFormSubmition(e) {
    e.preventDefault();

    const currentFormEl = e.currentTarget;
    const timeInputEl = currentFormEl.querySelector('input[type="number"]');

    const timeValue = Number(timeInputEl.value);
    const timeType = currentFormEl.id;

    const calculatedTimeValues = calculateTime(timeValue, timeType);

    fillAllValues(calculatedTimeValues);

    function calculateTime(time, type) {
      let timeInSeconds = 0;
      switch (type) {
        case "days":
          timeInSeconds = time * 24 * 60 * 60;
          break;
        case "hours":
          timeInSeconds = time * 60 * 60;
          break;
        case "minutes":
          timeInSeconds = time * 60;
          break;
        case "seconds":
          timeInSeconds = time;
          break;
      }

      let timeValues = {
        days: timeInSeconds / 24 / 60 / 60,
        hours: timeInSeconds / 60 / 60,
        minutes: timeInSeconds / 60,
        seconds: timeInSeconds,
      };

      return timeValues;
    }

    function fillAllValues(timeValues) {
      for (const formEl of formEls) {
        const inputEl = formEl.querySelector('input[type="number"]');

        inputEl.value = timeValues[`${formEl.id}`].toFixed(2);
      }
    }
  }
}
