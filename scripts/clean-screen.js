"use-strict";

let timer = null;

$(mainFunction);

function mainFunction() {
  timer = setInterval(growCircle, parseInt($("#intervalInput").val()));
  $("#startButton").click(executeStart);
}

function growCircle() {
  setCircleDiameter(
    $(".circle").height() + parseInt($("#growthInput").val()),
    $(".circle").width() + parseInt($("#growthInput").val())
  );
}

function executeStart() {
  const numberOfCircles = parseInt($("#numOfCirclesInput").val());
  appendNewCircles(numberOfCircles);

  setCircleDiameter(
    parseInt($("#widthInput").val()),
    parseInt($("#widthInput").val())
  );

  resetTimer();
}

function appendNewCircles(number) {
  $("#content").empty();
  for (let i = 0; i < number; i++) {
    const newElement = $("<span>", {
      class: "circle",
    });

    if (i === 0) newElement.css("z-index", "5");

    if (i > 0) {
      newElement.css({
        "background-color": getRandomColor(),
        top: getRandomHeight($(".circle").height()),
        left: getRandomWidth($(".circle").width()),
      });
    }

    $("#content").append(newElement);
  }
}

function getRandomColor() {
  const randomColor = [
    "#8d5524",
    "#003333",
    "#0c4f4e",
    "#ffbcd9",
    "#de3163",
    "#ed872d",
    "#9966cc",
    "#aaff00",
    "#f0c2c1",
    "#ffd700",
    "#0a75ad",
    "#793b16",
  ];
  return randomColor[Math.floor(getRandom(randomColor.length))];
}

function getRandomHeight(height) {
  return getRandom(screen.availHeight - height);
}

function getRandomWidth(width) {
  return getRandom(screen.availWidth - width);
}

function getRandom(number) {
  return Math.random() * number;
}

function setCircleDiameter(height, width) {
  $(".circle")
    .height(height)
    .width(width)
    .css({
      "margin-top": ($(".circle").height() / 2) * -1 + "px",
      "margin-left": ($(".circle").width() / 2) * -1 + "px",
    });
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timer = setInterval(growCircle, parseInt($("#intervalInput").val()));
}
