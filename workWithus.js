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

// main page start
let parentMainlogo = document.querySelector(
	'.parent-main-logo-sigin_and_main-menu'
);

// chat online parent  select
let parentchat_img = document.querySelector('.parent-chat-img');

// chat box icon
let IconchatBox = document.querySelector('#icon-chat-box');

let chatBox = document.querySelector('.chat-box');
// select arrow up
let fixed_arrow_upParent = document.querySelector('.fixed-arrow-up-parent');

// icon bar select
let BarIcon = document.querySelector('.fa-bars');
// responsive menu select
let resPonsiveMenu = document.querySelector('.responsive-menu');
// responsive menu sticky select
let MenuSticky = document.querySelector('.parent-sign-up_and_iconbar');
// wrapper menu responsive select
let toggle = document.querySelectorAll('.toggle');
// responsive menu select
let parentresponsivelogotell = document.querySelector(
	'.parent-responsive-logo_tell'
);

//end selectors

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

// create 1 dive and here take it---  line code 45
let closeMenu = document.querySelector('.closeMenu');

// event for show menu and hide __ show class close menu and hide
// and toggel sticky menu responsive
BarIcon.addEventListener('click', () => {
	BarIcon.classList.toggle('BarIconBefor');
	resPonsiveMenu.classList.toggle('ShowResponsiveMenu');
	closeMenu.classList.toggle('showDiv');
	parentresponsivelogotell.classList.toggle('stickyNone_if_menu_open');
});

// close menu __ and toggel sticky menu responsive
div.addEventListener('click', () => {
	resPonsiveMenu.classList.remove('ShowResponsiveMenu');
	closeMenu.classList.toggle('showDiv');
	BarIcon.classList.toggle('BarIconBefor');
	parentresponsivelogotell.classList.toggle('stickyNone_if_menu_open');
});

//change icon menu

toggle.forEach((e) => {
	e.addEventListener('click', () => {
		e.classList.toggle('Showtoggle');
	});
});

// end  responsive menu

// all scorll event and function
document.addEventListener('scroll', () => {
	animationNumbers();
	let sY = window.scrollY;
	if (sY >= 100) {
		parentresponsivelogotell.classList.add('sticky');
		parentMainlogo.classList.add('fixed_Mainmenu_and_logo');
	}
	if (sY <= 100) {
		parentresponsivelogotell.classList.remove('sticky');

		parentMainlogo.classList.remove('fixed_Mainmenu_and_logo');
	}
});
