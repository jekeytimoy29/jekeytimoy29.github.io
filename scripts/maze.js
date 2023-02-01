"use-strict";

let playOn = false;

$(mainFunction);

function mainFunction() {
  $(".boundary")
    .mouseover(() => {
      if (playOn) {
        $(".boundary").addClass("youlose");
        $("#status").text("You Lose! :(");
        playOn = false;
      }
    })
    .mouseleave(() => $("#status").text("Click the 'S' to begin."));

  $("#start").click(() => {
    playOn = true;
    $(".boundary").removeClass("youlose");
  });

  $("#end")
    .mouseover(() => {
      $("#status").text("You Win! :)");
      playOn = false;
    })
    .mouseleave(() => $("#status").text("Click the 'S' to begin."));
}
