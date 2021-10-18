let progressbarScorll = document.getElementById('progressbarScorll');

let total = document.body.scrollHeight - window.innerHeight;



window.addEventListener('scroll', () => {
	let ProgressHeight =
		(window.pageYOffset / total) * 100;
	progressbarScorll.style.height = ProgressHeight + '%';
});
