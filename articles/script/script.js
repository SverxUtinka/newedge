let start = Date.now();

let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  if (timePassed >= 400) {
    clearInterval(timer);
    return;
  }

  draw(timePassed);

}, 100);

function draw(timePassed) {
	var band = document.getElementById("band");
	var title = document.getElementById("title");
	var main = document.getElementById("main");
	title.style.left = timePassed / 14 + 'px';
	main.style.left = timePassed / 14 + 'px';
	band.style.left = timePassed / 1677 + 'px';

}