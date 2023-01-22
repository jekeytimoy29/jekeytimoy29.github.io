const TURBO = 500;
const NON_TURBO = 250;

window.onload = function () {
  console.log("window onload...");
  startButton = document.getElementById("start");
  stopButton = document.getElementById("stop");
  animationSelected = document.getElementById("animation");
  fontsizeSelected = document.getElementById("fontsize");
  isTurbo = document.getElementById("turbo");
  textAreaField = document.getElementById("text-area");

  stopButton.onclick = stopAnimation;
  startButton.onclick = startAnimation;
  animationSelected.onchange = setAnimation;
  fontsizeSelected.onchange = setFontSize;
  isTurbo.onclick = setIsTurbo;
};

function startAnimation() {
  console.log("start animation...");

  savedCurrentTextArea = textAreaField.value;

  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopAnimation() {
  console.log("stop animation...");
  textAreaField.value = savedCurrentTextArea;

  startButton.disabled = false;
  stopButton.disabled = true;
}

function setAnimation() {
  switch (animationSelected.selectedIndex) {
    case 0:
      textAreaField.value = ANIMATIONS["Blank"];
      break;
    case 1:
      textAreaField.value = ANIMATIONS["Exercise"];
      break;
    case 2:
      textAreaField.value = ANIMATIONS["Juggler"];
      break;
    case 3:
      textAreaField.value = ANIMATIONS["Bike"];
      break;
    case 4:
      textAreaField.value = ANIMATIONS["Dive"];
      break;
  }
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

function setIsTurbo() {}
