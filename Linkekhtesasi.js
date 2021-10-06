// دعوت به همکاری js

// variable
const pageOne = document.querySelector('.pageone');
const pageTwo = document.querySelector('.pagetwo');
const pageThree = document.querySelector('.pagethree');
const allBtn = document.querySelectorAll('.btn');
const numberOnePage2 = document.querySelector('#numberonepage2');
const numberOnePage2Rangi = document.querySelector('#numberonepage2-rangi');
const btnVorod= document.querySelector('.form-register button')
const btnedame= document.querySelector('.btn.bwhite')
console.log(btnedame)
// Functions

allBtn.forEach((element) => {
	element.addEventListener('click', () => {
		let button = element.getAttribute('data-id');
		if (button == 1) {
			pageOne.style.display = 'none';
			pageTwo.style.display = 'block';
			numberOnePage2.style.backgroundColor = '#fff';
			numberOnePage2Rangi.style.backgroundColor = '#E5E5E5';
		} else if (button == 2) {
			pageTwo.style.display = 'none';
			pageOne.style.display = 'block';
		} else if (button == 3) {
			pageTwo.style.display = 'none';
			pageThree.style.display = 'block';
			document.querySelector('#page3numOne').style.backgroundColor =
				'#fff';
		} else if (button == 4) {
			pageThree.style.display = 'none';
			pageTwo.style.display = 'block';
		}
	});
});

// responsive menu
let toggle = document.querySelectorAll('.toggle');
let BarIcon = document.querySelector('.fa-bars');
let resPonsiveMenu = document.querySelector('.responsive-menu');

toggle.forEach((e) => {
	e.addEventListener('click', () => {
		e.nextElementSibling.classList.toggle('show-wrapper-menu-responsive');
	});
});

// create div for closed menu responsive
let div = document.createElement('div');
div.className = 'closeMenu';
document.body.appendChild(div);
// create div for closed menu responsive

let closeMenu = document.querySelector('.closeMenu');

BarIcon.addEventListener('click', () => {
	BarIcon.classList.toggle('BarIconBefor');
	resPonsiveMenu.classList.toggle('ShowResponsiveMenu');
	closeMenu.classList.toggle('showDiv');
	parentresponsivelogotell.classList.toggle('stickyNone_if_menu_open');
});

div.addEventListener('click', () => {
	resPonsiveMenu.classList.remove('ShowResponsiveMenu');
	closeMenu.classList.toggle('showDiv');
	BarIcon.classList.toggle('BarIconBefor');
	parentresponsivelogotell.classList.remove('stickyNone_if_menu_open');
});

toggle.forEach((e) => {
	e.addEventListener('click', () => {
		e.classList.toggle('Showtoggle');
	});
});

btnVorod.addEventListener('click', (e) => {e.preventDefault()});
btnedame.addEventListener('click', (e) =>{e.preventDefault()})