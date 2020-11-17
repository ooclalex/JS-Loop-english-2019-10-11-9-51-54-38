for (var i = 1; i <= 9; i++) {
  var s = ""
  for (var j = 1; j <= i; j++) {
    s += i+"*"+j+"="+(i*j)+" ";
  }
  s = s.substring(0, s.length-1);
  console.log(s);
}