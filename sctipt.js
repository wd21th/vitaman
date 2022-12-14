$(document).ready(function(){
    $('.your-class').slick({
        // setting-name: setting-value
    });
});

const modal = document.querySelector('#modal');
document.body.addEventListener('click', function(e){
    modal.classList.remove('active');
    console.log("It works")
})

const playBtns = document.querySelectorAll('.people__play');
console.log('playBtns :', playBtns);

for(let i=0; i<playBtns.length; i++){
    playBtns[i].addEventListener('click', function(e){
        e.stopPropagation();
        console.log("It works")
        modal.classList.add('active');
        console.log('modal :', modal);
        
    })
}

// playBtns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
        
//     })
// })