let progressbarScorll = document.getElementById('progressbarScorll');

let total = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
	let ProgressHeight = (window.pageYOffset / total) * 100;
	progressbarScorll.style.height = ProgressHeight + '%';
});

// logo animation start

const Lgoforjsanimate = document.querySelectorAll('.for-js-animate');

let setintervalLogo = setInterval(() => {
	Lgoforjsanimate.forEach((e) => {
		e.classList.add('jsClass_animation_logo');
	});
});

setTimeout(() => {
	Lgoforjsanimate.forEach((e) => {
		e.classList.toggle('jsClass_animation_logo2');
	});
}, 2000);
