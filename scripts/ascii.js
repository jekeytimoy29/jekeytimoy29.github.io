const TURBO = 5000;
const NON_TURBO = 250;

window.onload = function () {
  console.log("window onload...");
  startButton = document.getElementById("start");
  stopButton = document.getElementById("stop");
  animationSelected = document.getElementById("animation");
  fontsizeSelected = document.getElementById("fontsize");
  isTurbo = document.getElementById("turbo");
  textAreaField = document.getElementById("text-area");

  timeInterval = NON_TURBO;
  timer = null;
  counter = 0;
  textBoxForAnimate = "";

  stopButton.onclick = stopAnimation;
  startButton.onclick = startAnimation;
  animationSelected.onchange = setAnimation;
  fontsizeSelected.onchange = setFontSize;
  isTurbo.onclick = setIsTurbo;
};

function startAnimation() {
  console.log("start animation...");

  startButton.disabled = true;
  stopButton.disabled = false;
  animationSelected.disabled = true;
  textAreaField.disabled = true;

  savedCurrentTextArea = textAreaField.value;

  timer = setInterval(initiateAnimation, timeInterval);
}

function stopAnimation() {
  console.log("stop animation...");
  clearTimer();

  textAreaField.value = savedCurrentTextArea;

  startButton.disabled = false;
  stopButton.disabled = true;
  animationSelected.disabled = false;
  textAreaField.disabled = false;
}

function setAnimation() {
  let animText;
  switch (animationSelected.selectedIndex) {
    case 0:
      animText = ANIMATIONS["Blank"];
      break;
    case 1:
      animText = ANIMATIONS["Exercise"];
      break;
    case 2:
      animText = ANIMATIONS["Juggler"];
      break;
    case 3:
      animText = ANIMATIONS["Bike"];
      break;
    case 4:
      animText = ANIMATIONS["Dive"];
      break;
  }
  textBoxForAnimate = animText.split("=====\n");
  textAreaField.value = textBoxForAnimate[0];
}

function setFontSize() {
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

function setIsTurbo() {
  if (isTurbo.checked) timeInterval = TURBO;
  else timeInterval = NON_TURBO;

  if (null !== timer) {
    clearTimer();
    timer = setInterval(initiateAnimation, timeInterval);
  }
}

function initiateAnimation() {
  textAreaField.value = textBoxForAnimate[counter];
  counter++;

  if (counter === textBoxForAnimate.length - 1) counter = 0;
}

function clearTimer() {
  clearInterval(timer);
  timer = null;
}
