// Variables
const suppBtn = document.querySelector('.course-supp-button'),
supptText = document.querySelector('.course-supp-add')






// addEventListeners
suppBtn.addEventListener('click',(e) => {
        e.preventDefault();
        supptText.classList.toggle('show')
        suppBtn.firstElementChild.firstElementChild.classList.toggle('rotatebtn')
})

const heart1= document.querySelector('.interesting .far')
const heart2= document.querySelector('.interesting .fa')

heart1.addEventListener('click',()=>{
        document.querySelector('.interesting').classList.add('active-heart')
       
})
heart2.addEventListener('click',()=>{
        heart2.parentElement.parentElement.classList.remove('active-heart')
})