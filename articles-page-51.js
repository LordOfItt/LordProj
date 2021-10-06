const pageItems=document.querySelectorAll('.page-item a');
pageItems.forEach(item => {
       
        item.addEventListener('click',(e)=>{
                document.querySelector('.active').classList.remove('active');
                e.preventDefault()
                       item.classList.add('active')
              
        })
});