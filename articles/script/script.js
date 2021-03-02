let start = Date.now();

let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  if (timePassed >= 200) {
    clearInterval(timer);
    return;
  }

  draw(timePassed);

}, 100);

function draw(timePassed) {
	var train = document.getElementById("band");
	train.style.left = timePassed / 1677 + "px";
}