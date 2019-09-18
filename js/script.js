 var banner = document.getElementById('my-banner');
 var btn = document.getElementById("start-image");

btn.onclick = function() {
	banner.style.display = "block";
}


window.onclick = function(event) {
	if (event.target == banner) {
		banner.style.display = "none";
	}
}