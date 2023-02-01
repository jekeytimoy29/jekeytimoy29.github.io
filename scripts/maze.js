let playOn = false;

$(mainFunction);

function mainFunction() {
  "use-strict";

  $(".boundary").mouseover(() => {
    if (playOn) {
      $(".boundary").addClass("youlose");
      $("#status").text("You Lose! :(");
      playOn = false;
    }
  });

  $("#start").click(() => (playOn = true));

  $("#end").mouseover(() => {
    if (playOn) {
      $("#status").text("You Win! :)");
      playOn = false;
    }
  });

  $("#maze").mouseleave((e) => {
    if (playOn) {
      $(".boundary").addClass("youlose");
      $("#status").text("You Lose! :(");
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
