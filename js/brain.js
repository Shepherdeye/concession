let day = document.getElementById("days"),
  gbyte = document.getElementById("gbytes"),
  Cases = document.getElementById("Cases"),
  check = document.getElementById("check"),
  row = document.getElementById("row"),
  less = document.getElementById("less"),
  more = document.getElementById("more"),
  moreThan = document.getElementById("moreThan"),
  lessThan = document.getElementById("lessThan"),
  lessThan2 = document.getElementById("lessThan2"),
  copyText = document.querySelector("#copy"),
  copyText2 = document.querySelector("#copy2"),
  result = document.getElementById("result"),
  duration = document.getElementById("duration"),
  mobile = document.getElementById("mobilei"),
  onspot = document.getElementById("onspoti"),
  condition = document.getElementById("condition"),
  checkif = document.getElementById("chd"),

  btn = document.getElementById("btn");


onspot.onclick = function () {
  document.getElementById("we").classList.add("hidden");
  document.getElementById("onspot").classList.remove("hidden");
  mobile.checked = false;
  document.getElementById("start").classList.add("hidden");
}
mobile.onclick = function () {
  document.getElementById("onspot").classList.add("hidden");
  document.getElementById("we").classList.remove("hidden");
  document.getElementById("start").classList.add("hidden")

  onspot.checked = false;

}









btn.onclick = function () {
  result.value = day.value * gbyte.value * 1024 * 1024 * 1024;
  console.log(result);


  if (result.value <= 5368709120 && result.value != 0) {
    result.style.color = "green";
    document.getElementById("notice").textContent = " OK add  it by your self";
    document.getElementById("notice").style.color = "green";
    document.getElementById("ir").classList.add("hidden1");

  } else if (result.value > 5368709120 && result.value <= 21474836480) {
    result.style.color = "red";
    console.log("morethan");
    document.getElementById("notice").textContent = "Should handle by team leader create through IR";
    document.getElementById("notice").style.color = "red";
    document.getElementById("ir").classList.remove("hidden1");
  } else if (result.value > 21474836480) {
    document.getElementById("notice").textContent = " You will make a normal Concession Not Onspot";
    document.getElementById("notice").style.color = "orange";
    document.getElementById("result").style.color = "orange";

    document.getElementById("ir").classList.add("hidden1");
  } else {
    document.getElementById("notice").textContent = " You should Enter a value ";
    document.getElementById("notice").style.color = "gray";
    document.getElementById("result").style.color = "gray";

    document.getElementById("ir").classList.add("hidden1");
  }




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
  lessThan2.classList.remove("hidden1");
  copyText.classList.remove("hidden1");


}
more.onclick = function () {
  // console.log("sayed")
  moreThan.classList.remove("hidden1");
  document.getElementById("copy2").classList.remove("hidden1");

}

copyText.onclick = function () {
  navigator.clipboard.writeText(lessThan2.innerText);
  document.getElementById("copy").style.background = "white";

}


copyText2.onclick = function () {
  navigator.clipboard.writeText(result.value);
  document.getElementById("copy2").style.background = "white";

}


condition.onchange = function () {
  if (condition.value == "0") {
    document.getElementById("ifwe").classList.remove("hidden");

  } else {
    document.getElementById("ifwe").classList.add("hidden");

    document.getElementById("packages").classList.remove("hidden");


  }
}


checkif.onclick = function () {
  document.getElementById("ch1").classList.remove("hidden");
  document.getElementById("ch2").classList.remove("hidden");

}
//this id  the  right choose 
let ch2 = document.getElementById("ch3");
ch2.onclick = function () {
  document.getElementById("ch4").classList.remove("hidden1");
  document.getElementById("packages").classList.add("hidden");

  document.getElementById("ch5").checked = false;
  // cpackages.classList.remove("hidden");
  document.getElementById("desc").classList.add("hidden");
  document.getElementById("Fresult").classList.add("hidden");
    document.getElementById("FresultD").classList.add("hidden");
    document.getElementById("notf").classList.add("hidden");



}



//this id  the  left choose 

document.getElementById("ch5").onclick = function () {
  document.getElementById("packages").classList.remove("hidden");
  ch2.checked = false;
  document.getElementById("ch4").classList.add("hidden1");

};
let cpackages = document.getElementById("packagesx");
cpackages.onchange = function () {
  if (cpackages.value == "0") {
    document.getElementById("Fresult").classList.remove("hidden");
    document.getElementById("Fresult").textContent = 5368709120;
    document.getElementById("FresultD").classList.remove("hidden");
    document.getElementById("notf").classList.remove("hidden");
    document.getElementById("nots").textContent=" you should add by Using  BSS";
    document.getElementById("nots").style.color="Green";
    document.getElementById("tllink").classList.add("hidden");
    document.getElementById("desc").classList.remove("hidden");
    document.getElementById("descs").textContent=" 5GB Will Be Added For 3 Days";
    

    




  } else if (cpackages.value == "1") {
    document.getElementById("Fresult").textContent = 10737418240;
    document.getElementById("FresultD").classList.remove("hidden");
    document.getElementById("notf").classList.remove("hidden");
    document.getElementById("nots").textContent=" Should handle by team leader create through";
    document.getElementById("nots").style.color="red";
    document.getElementById("tllink").classList.remove("hidden");
    document.getElementById("desc").classList.remove("hidden");
    document.getElementById("descs").textContent=" 10GB Will Be Added For 7 Days ";
    



  } else if (cpackages.value == "11") {
    document.getElementById("Fresult").textContent = " ";
    document.getElementById("FresultD").classList.remove("hidden");


  } else {
    document.getElementById("Fresult").textContent = 21474836480;
    document.getElementById("Fresult").classList.remove("hidden");
    document.getElementById("FresultD").classList.remove("hidden");
    document.getElementById("notf").classList.remove("hidden");
    document.getElementById("nots").textContent=" Should handle by team leader create through";
    document.getElementById("nots").style.color="red";
    document.getElementById("tllink").classList.remove("hidden");
    document.getElementById("descs").textContent=" 20GB Will Be Added For 15 Days";
    document.getElementById("desc").classList.remove("hidden");





  }
}


let copyText3 = document.getElementById("copy3"),
  fresult = document.getElementById("Fresult");


copyText3.onclick = function () {
  navigator.clipboard.writeText(fresult.innerText);
  document.getElementById("copy3").style.background = "white";
  document.getElementById("copy3").style.border = "white";
  

}
