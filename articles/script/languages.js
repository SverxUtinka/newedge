var ru = document.getElementById("pageRu");
var by = document.getElementById("pageBy");
var clickBy = document.querySelector("#by");
var clickRu = document.querySelector("#rus");

clickRu.addEventListener("mousedown", function() {
	by.style.left = -10000 + "px";
	ru.style.left = 0 + "px";
	clickRu.style.color = "#DFE1F0";
	clickBy.style.color = "white";
});

clickBy.addEventListener("mousedown", function() {
	by.style.left = 0 + "px";
	ru.style.left = -10000 + "px";
	clickRu.style.color = "white";
	clickBy.style.color = "#DFE1F0";
});