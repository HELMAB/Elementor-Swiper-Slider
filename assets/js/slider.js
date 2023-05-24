document.addEventListener('DOMContentLoaded', () => {
	new Swiper(".featured-swiper", {
		slidesPerView: "auto",
		loop: true,
      	spaceBetween: 20,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	});
});