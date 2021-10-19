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

const forjsanimate = document.querySelector('#for-js-animate');

function test() {
	let d = 1;
	if (d == 1) {
		let animatelogo = setInterval(() => {
			forjsanimate.classList.add('jsClass_animation_logo');
		});
		if (d == 2) {
			clearInterval(() => {
				animatelogo;
			}, 1000);
		}
		d++;
		console.log(d);
	}

	console.log(d);
}
test();
