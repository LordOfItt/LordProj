let progressbarScorll = document.getElementById('progressbarScorll');

let total = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
	let ProgressHeight = (window.pageYOffset / total) * 100;
	progressbarScorll.style.height = ProgressHeight + '%';
});

// mouse move effect

const CursorEffect = document.querySelector('.cursor-effect');

document.addEventListener('mousemove', (e) => {
	CursorEffect.setAttribute(
		'style',
		'top: ' + (e.pageY - 25) + 'px; left:' + (e.pageX - 25) + 'px'
	);
});

document.addEventListener('click', () => {
	CursorEffect.classList.add('clickAnimationMouse');
	setTimeout(() => {
		CursorEffect.classList.remove('clickAnimationMouse');
	}, 500);
});

// logo animation start

const Lgoforjsanimate = document.querySelectorAll('.for-js-animate');

let setintervalLogo = setInterval(() => {
	Lgoforjsanimate.forEach((e) => {
		e.classList.add('jsClass_animation_logo');
	});
});

setInterval(() => {
	Lgoforjsanimate.forEach((e) => {
		e.classList.toggle('jsClass_animation_logo2');
	});
}, 2000);
