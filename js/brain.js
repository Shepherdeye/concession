let day = document.getElementById("days"),
  gbyte = document.getElementById("gbytes"),
  Cases = document.getElementById("Cases"),
  check = document.getElementById("check"),
  row = document.getElementById("row"),
  less = document.getElementById("less"),
  more = document.getElementById("more"),
  moreThan = document.getElementById("moreThan"),

  lessThan = document.getElementById("lessThan"),


  result = document.getElementById("result"),
  duration = document.getElementById("duration"),

  btn = document.getElementById("btn");

btn.onclick = function () {
  result.textContent = day.value * gbyte.value * 1024 * 1024 * 1024;
}
Cases.onchange = function () {
  // console.log("sayed")
  duration.classList.remove("hidden");
}
check.onclick = function () {
  // console.log("sayed")
  row.classList.remove("hidden");
}
less.onclick = function () {
  // console.log("sayed")
  lessThan.classList.remove("hidden1");
}
more.onclick = function () {
  // console.log("sayed")
  moreThan.classList.remove("hidden1");
}















