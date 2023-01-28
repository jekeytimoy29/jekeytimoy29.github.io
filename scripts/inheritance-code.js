// eslint-disable-next-line no-extend-native
Object.prototype.filter = function (bannedWord) {
  "use strict";
  console.log(this);

  const split = this.split(" ");
  const filtered = split.filter((s) => s !== bannedWord);

  return filtered.reduce((a, b) => a + " " + b);
};
