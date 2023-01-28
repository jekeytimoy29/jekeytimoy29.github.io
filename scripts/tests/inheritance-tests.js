Object.prototype.filter = function (bannedWord) {
  console.log(this);

  let split = this.split(" ");
  let filtered = split.filter((s) => s !== bannedWord);
  return filtered.reduce((a, b) => a + " " + b);
};
