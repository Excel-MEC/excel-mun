const countdownUnits =
	countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;

function runCountDownTimer(year, month, day) {
	const date = new Date(year, month, day);
	setInterval(() => {
		$("span.countdownTarget").html(countdown(date).toString() + " remaining.");
	}, 1000);
}

function handleScroll() {
	$(document).scroll(() => {
		if ($(document).scrollTop() > 53) {
			$("nav").removeClass("navbar-transparent");
		} else {
			$("nav").addClass("navbar-transparent");
		}
	});
}

function setupScrollreveal() {
	sr.reveal(
		".marketing-element",
		{ duration: 2000, origin: "bottom", distance: "200px" },
		60
	);
	sr.reveal(".registration-alert", { duration: 500, origin: "top" });
	sr.reveal(".about-us-heading", { duration: 1000, origin: "left" });
	sr.reveal(".about-us-desc", { duration: 1000, origin: "right" });
	sr.reveal(".preparation-heading", { duration: 1000, origin: "left" });
	sr.reveal(
		".topic",
		{ duration: 2000, origin: "bottom", distance: "20px" },
		60
	);
	sr.reveal(".contact-no-el", { duration: 1000, origin: "left" }, 60);
	sr.reveal(".contact-us-heading", { duration: 1000, origin: "right" });
	sr.reveal(".map-panel", { duration: 1000, origin: "left" });
	sr.reveal(".sponsor-img", { duration: 400, origin: "bottom" }, 60);
}

function smoothScroll() {
	const duration = 800;

	$("#bs-example-navbar-collapse-2 ul li a[href^='#']").on("click", function(
		e
	) {
		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		// animate
		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top
			},
			duration,
			function() {
				// when done, add hash to url
				// (default click behaviour)
				window.location.hash = hash;
			}
		);
	});

	$(".navbar-header a[href^='#']").on("click", function(e) {
		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		if (!hash) return;

		// animate
		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top
			},
			duration,
			function() {
				// when done, add hash to url
				// (default click behaviour)
				window.location.hash = hash;
			}
		);
	});
}

function initMap() {
	var myLocation = new google.maps.LatLng(9.9938, 76.2906);
	var mapOptions = {
		center: myLocation,
		zoom: 19
	};
	var marker = new google.maps.Marker({
		position: myLocation,
		title: "Property Location"
	});
	var map = new google.maps.Map(document.getElementById("map1"), mapOptions);
	marker.setMap(map);
}

function carouselFill() {
	var children = $(".item>img"),
		element;
	console.log(children);
	for (i = 0; i < children.length; ++i) {
		element = children[i];
		var ratioW = element.height / 500,
			ratioH = element.width / window.innerWidth;
		var transWidth = element.width / ratioW,
			transHeight = element.height / ratioH;
		console.log(transWidth, transHeight);
		if (transWidth - window.innerWidth < transHeight - 500) {
			element.classList.add("landscape");
			var vAlign = (500 - transHeight) / 2;
			console.log(vAlign);
			element.style.top = vAlign + "px";
		} else {
			element.classList.add("portrait");
		}
	}
}

$(document).ready(() => {
	window.sr = ScrollReveal();
	carouselFill();
	// runCountDownTimer(2017,9,29);
	handleScroll();
	setupScrollreveal();
	smoothScroll();
});
