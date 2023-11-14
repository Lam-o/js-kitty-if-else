var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

//click on button, function show img is triggered//

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    //console.log("Yes");//
    cat.classList.remove("show");
    button.innerText = "Wait, come back !";
    button.classList.add("disappear");
  } else {
    //console.log("No")//
    cat.classList.add("show");
    button.innerText = "Shooo , cat !!";
    button.classList.remove("disappear");
  }
});
