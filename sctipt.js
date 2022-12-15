$(document).ready(function(){
    $('.your-class').slick({
        // setting-name: setting-value
    });
});

const modal = document.querySelector('#modal');
document.body.addEventListener('click', function(e){
    modal.classList.remove('active');
    
})

const playBtns = document.querySelectorAll('.people__play');


for(let i=0; i<playBtns.length; i++){
    playBtns[i].addEventListener('click', function(e){
        e.stopPropagation();
        
        modal.classList.add('active');
        
        
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
    
    

    if(formData.get('name').trim() == ''){
        this.querySelector('[name="name"]').classList.add('error');
    }else {
        this.querySelector('[name="name"]').classList.remove('error');
    }

    if(formData.get('phoneNumber').trim() == ''){
        this.querySelector('[name="phoneNumber"]').classList.add('error');
    } else {
        this.querySelector('[name="phoneNumber"]').classList.remove('error');
    }

    if(!this.querySelector('.error')){
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
            headers: {
                'Content-Type': 'application/json',
            }, 
            mode: 'no-cors'
        }).then(function(response){
            
        }
        ).catch(function(error){
            
        })
        // ===========================================



        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`, {
            method: 'POST',
            body: formData
        })
        .then(function(response){
            
            swal("Ушпешно!", "Мы свяжемся с вами в ближайшее время", "success");
            form.reset();
        })
        .catch(function(error){
            
        })
    }
   

})