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

const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(form);
    console.log('formData :', formData.get('name'));
    console.log('formData :', formData.get('phoneNumber'));
    const chatId = '-875139516';
    const text = `Имя: ${formData.get('name')}, Телефон: ${formData.get('phoneNumber')}`;
    const token = '5907176700:AAEgfGrnIodBznWdIS9Fh_N5lYmEHA8Yfws';
    
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`, {
        method: 'POST',
        body: formData
    })
    .then(function(response){
        console.log('response :', response);
    })
    .catch(function(error){
        console.log('error :', error);
    })


})