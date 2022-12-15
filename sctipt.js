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
    const chatId = '-1001860607109';
    const testChatId = '660419791'
    // ватсап сссылка
    // const text = `👨🏻‍💻Имя: ${formData.get('name')} 
    // 📞Телефон: ${formData.get('phoneNumber')} https://wa.me/${formData.get('phoneNumber').replace(/\D/g, '')}`;
    const text = `${formData.get('name')}, ${formData.get('phoneNumber')} https://wa.me/${formData.get('phoneNumber').replace(/\D/g, '')}`;


    const token = '5907176700:AAEgfGrnIodBznWdIS9Fh_N5lYmEHA8Yfws';

    // ===========================================
    const website = 'https://script.google.com/macros/s/AKfycbziFrREB7JfQW4HfFEIiv_X1V5ewjHjLy-m91NaM74UHy_7YQlXFGIengy_ubUn1zU_2A/exec'

    const query = `?name=${formData.get('name')}&phoneNumber=${formData.get('phoneNumber')}`
    fetch(website + query, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function(response){
        console.log('response :', response);
    }
    ).catch(function(error){
        console.log('error :', error);
    })
    // ===========================================



    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`, {
        method: 'POST',
        body: formData
    })
    .then(function(response){
        console.log('response :', response);
        swal("Ушпешно!", "Мы свяжемся с вами в ближайшее время", "success");
        form.reset();
    })
    .catch(function(error){
        console.log('error :', error);
    })


   

})