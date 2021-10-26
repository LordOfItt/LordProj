let screenPosition = window.innerHeight;
function animationNumbers() {
	let SetNum = document.querySelectorAll('.SetNum');
	SetNum.forEach((e) => {
		let containerPosition = e.getBoundingClientRect().top;

		if (containerPosition < screenPosition) {
			anime({
				targets: '#view1',
				value: [0, 32],
				duration: 1000,
				round: 1,
				easing: 'linear',
				loop: false,
			});
			anime({
				targets: '#view2',
				value: [0, 944],
				duration: 1000,
				round: 1,
				easing: 'linear',
				loop: false,
			});
			anime({
				targets: '#view3',
				value: [0, 816],
				duration: 1000,
				round: 1,
				easing: 'linear',
				loop: false,
			});

			anime({
				targets: '#customer',
				value: [0, 462],
				duration: 1000,
				round: 1,
				easing: 'linear',
				loop: false,
			});
			anime({
				targets: '#project',
				value: [0, 122],
				duration: 1000,
				round: 1,
				easing: 'linear',
				loop: false,
			});
		}
	});
}

// // all scorll event and function
document.addEventListener('scroll', () => {
	animationNumbers();
	test();
});

function test() {
	let infomationbox = document.querySelectorAll('.infomation-box');
	infomationbox.forEach((e) => {
		let informationBoxrect = e.getBoundingClientRect().top;
		if (informationBoxrect < screenPosition) {
			e.classList.add('scale_animation');
		}
	});
}
