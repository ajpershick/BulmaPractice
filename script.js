$(document).ready(function(){
	$(".navbar-burger").click(function() {
		// console.log("clicked navbar-burger");
		$(this).toggleClass("is-active");

		var $navMenu = $("div.navbar-menu");
		$navMenu.toggleClass("is-active");
	});

	$("a.has-text-white").hover(function() {
		// console.log("hovered");
		$(this).toggleClass("has-text-dark");
	});

	$("a.icon i.has-text-danger").hover(function() {
		$(this).toggleClass("has-text-danger");
		$(this).toggleClass("has-text-white");
	});

	$("#action-call-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#tiles-section").offset().top
    }, 500);
	});

});