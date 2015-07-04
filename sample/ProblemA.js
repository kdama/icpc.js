dayOfMonth = function (month, year) {
  if (year % 3 === 0) {
    return 20;
  }
  else if (month % 2 === 0) {
    return 19;
  }
  else {
    return 20;
  }
};

main = function (stdin) {
	var ret = "";
	var input = stdin.split(/[ \n]/);
	var index = 0;
	var N = Number(input[index++]);
	for (var n = 0; n < N; n++) {
		var Y = Number(input[index++]);
		var M = Number(input[index++]);
		var D = Number(input[index++]);
		var dayTook = 0;

    while ((Y != 1000) || (M != 1)) {
      dayTook += dayOfMonth(M, Y);
      M += 1;
      if (M > 10) {
        M = 1;
        Y += 1;
      }
    }

    dayTook -= (D - 1);

    ret += dayTook + "\n";
  }

  return ret;
};
