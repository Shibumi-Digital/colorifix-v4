const main = document.querySelector(".main");

main.addEventListener("mouseover", () => {
  main.classList.remove("main");
  main.classList.add("hover");
});


function showPanel(panId) {
  var panels = document.getElementsByClassName("overlay");
  for (var i = 0; i < panels.length; i++) {
    panels.item(i).style.display = "none";
  }
  var panel = document.getElementById(panId);
  panel.style.display = "block";
}

function hidePanel(panId) {
  var panel = document.getElementById(panId);
  panel.style.display = "none";
}
