let playOn = false;

$(mainFunction);

function mainFunction() {
  "use-strict";

  $(".boundary").mouseover(losesGame);

  $("#maze").mouseleave(losesGame);

  $("#start").click(() => (playOn = true));

  $("#end").mouseover(() => {
    if (playOn) {
      $("#status").text("You Win! :)");
      playOn = false;
    }
  });

  $("#maze")
    .parent()
    .click(() => {
      $("#status").text('Click the "S" to begin.');
      $(".boundary").removeClass("youlose");
    });
}

function losesGame() {
  "use-strict";

  if (playOn) {
    $(".boundary").addClass("youlose");
    $("#status").text("You Lose! :(");
    playOn = false;
  }
}
