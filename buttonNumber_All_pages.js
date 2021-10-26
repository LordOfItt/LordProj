// const arrowRightCourseBtnsPages = document.querySelector(
// 	'#arrowRight-course-btns-pages'
// );

// const arrowLeftCourseBtnsPages = document.querySelector(
// 	'#arrowLeft-course-btns-pages'
// );
// let num = 0;

// chang style btn-numbers , 1 , 2 ...
const pageItems = document.querySelectorAll('.page-item a');
pageItems.forEach((item) => {
	item.addEventListener('click', (e) => {
		document.querySelector('.active').classList.remove('active');
		e.preventDefault();
		item.classList.add('active');
	});
});

// console.log(pageItems.length);
// functions left and right arrow

// function nextbtn() {
// 	if (pageItems.length >= num) {
// 		num++;
// 		console.log(num);
// 	} else {
// 		num = 0;
// 	}
// }

// btn
// arrowRightCourseBtnsPages.addEventListener('click', nextbtn);

// arrowLeftCourseBtnsPages.addEventListener('click', () => {
// 	alert('left_arrow');
// });
