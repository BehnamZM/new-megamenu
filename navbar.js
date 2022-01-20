const bars = document.querySelector('#bars');
const headerPartTwo = document.querySelector('#header-part-two')

bars.addEventListener('click',()=>{
    headerPartTwo.classList.toggle('show');
})