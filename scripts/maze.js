"use-strict";

let playOn = false;

$(mainFunction);

function mainFunction() {
  $(".boundary").mouseover(() => {
    if (playOn) {
      $(".boundary").addClass("youlose");
      playOn = false;
    }
  });

  $("#start").click(() => {
    playOn = true;
    $(".boundary").removeClass("youlose");
  });
}
