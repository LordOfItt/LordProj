// slector

//  head slider selector start and varibel
let slides = document.querySelectorAll('.slides');
let nextbtnShowSlide = document.querySelector('.nxt-btn-slide');
let prevbtnSlide = document.querySelector('.prev-btn-slide');
let num = 0;
//  head slider selector and varibel end

// slector

// head slilder full screen start
const init = (a) => {
	slides.forEach((allslides) => {
		allslides.style.display = 'none';
	});

	slides[a].style.display = 'block';
};

window.addEventListener('DOMContentLoaded', init(num));

function ShowNextSlide() {
	if (num >= slides.length - 1) {
		num = 0;
	} else {
		num++;
	}
	init(num);
}

function ShowPrevSlide() {
	if (num <= 0) {
		num = slides.length - 1;
	} else {
		num--;
	}
	init(num);
}

nextbtnShowSlide.addEventListener('click', () => {
	ShowNextSlide();
});

prevbtnSlide.addEventListener('click', () => {
	ShowPrevSlide();
});

// head slilder full screen end

// swiper start

let swiper = new Swiper('.mySwiper', {
	slidesPerView: 5,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 5,
		},

		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

// swiper end

let TwoText_Swiper_Slide_Amozesh = document.querySelectorAll(
	'.two-text-swiper-slide-amozesh'
);

let IconFaHeart = document.querySelector('.fa-heart');

TwoText_Swiper_Slide_Amozesh.forEach((AllTwoText) => {
	AllTwoText.addEventListener('click', () => {
		AllTwoText.classList.toggle('TEST');
	});
});

// btn effect

let Amozeshbtn = document.querySelectorAll('.amozesh-btn');
Amozeshbtn.forEach((element) => {
	element.addEventListener('mousemove', (e) => {
		let xp = e.pageX - element.offsetLeft;
		let yp = e.pageY - element.offsetTop;
		element.style.setProperty('--x', xp + 'px');
		element.style.setProperty('--y', yp + 'px');
	});
});

let a = function name(params) {
	const [state, setstate] = useState(initialState) 
}