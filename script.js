$(document).ready(function(){
	$(".navbar-burger").click(function() {
		// console.log("clicked navbar-burger");
		$(this).toggleClass("is-active");
	});

	$("a.has-text-white").hover(function() {
		// console.log("hovered");
		$(this).toggleClass("has-text-dark");
	})
});