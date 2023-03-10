/* global
BLANK, EXERCISE, JUGGLER, BIKE, DIVE
*/

const TURBO = 50;
const NON_TURBO = 250;

let timeInterval = NON_TURBO;
let timer = null;
let counter = 0;
let textBoxForAnimate = [];
let savedCurrentTextArea = "";

window.onload = function () {
  "use strict";
  console.log("window onload...");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const animationSelected = document.getElementById("animation");
  const fontsizeSelected = document.getElementById("fontsize");
  const isTurbo = document.getElementById("turbo");
  const textAreaField = document.getElementById("text-area");

  stopButton.onclick = () =>
    stopAnimation(startButton, stopButton, textAreaField, animationSelected);
  startButton.onclick = () =>
    startAnimation(startButton, stopButton, textAreaField, animationSelected);
  animationSelected.onchange = () =>
    setAnimation(animationSelected, textAreaField);
  fontsizeSelected.onchange = () =>
    setFontSize(fontsizeSelected, textAreaField);
  isTurbo.onclick = () => setIsTurbo(isTurbo, textAreaField);
};

function startAnimation(
  startButton,
  stopButton,
  textAreaField,
  animationSelected
) {
  "use strict";
  console.log("start animation...");

  startButton.disabled = true;
  stopButton.disabled = false;
  animationSelected.disabled = true;

  savedCurrentTextArea = textAreaField.value;

  timer = setInterval(() => initiateAnimation(textAreaField), timeInterval);
}

function stopAnimation(
  startButton,
  stopButton,
  textAreaField,
  animationSelected
) {
  "use strict";
  console.log("stop animation...");
  clearTimer();

  textAreaField.value = savedCurrentTextArea;

  startButton.disabled = false;
  stopButton.disabled = true;
  animationSelected.disabled = false;
  counter = 0;
}

function setAnimation(animationSelected, textAreaField) {
  "use strict";
  let animText;
  switch (animationSelected.selectedIndex) {
    case 0:
      animText = BLANK;
      break;
    case 1:
      animText = EXERCISE;
      break;
    case 2:
      animText = JUGGLER;
      break;
    case 3:
      animText = BIKE;
      break;
    case 4:
      animText = DIVE;
      break;
  }

  if (animText !== "") {
    textBoxForAnimate = animText.split("=====\n");
    textAreaField.value = textBoxForAnimate[0];
  } else {
    textAreaField.value = "";
    textBoxForAnimate = [];
  }
}

function setFontSize(fontsizeSelected, textAreaField) {
  "use strict";
  switch (fontsizeSelected.selectedIndex) {
    case 0:
      console.log(fontsizeSelected.value);
      textAreaField.className = "tiny";
      break;
    case 1:
      textAreaField.className = "small";
      break;
    case 2:
      textAreaField.className = "medium";
      break;
    case 3:
      textAreaField.className = "large";
      break;
    case 4:
      textAreaField.className = "extra-large";
      break;
    case 5:
      textAreaField.className = "xxl";
      break;
  }
}

function setIsTurbo(isTurbo, textAreaField) {
  "use strict";
  if (isTurbo.checked) timeInterval = TURBO;
  else timeInterval = NON_TURBO;

  if (timer !== null) {
    clearTimer();
    timer = setInterval(() => initiateAnimation(textAreaField), timeInterval);
  }
}

function initiateAnimation(textAreaField) {
  "use strict";
  if (textBoxForAnimate.length > 0) {
    textAreaField.value = textBoxForAnimate[counter];
    counter++;

    if (counter === textBoxForAnimate.length) counter = 0;
  }
}

function clearTimer() {
  "use strict";
  clearInterval(timer);
  timer = null;
}
