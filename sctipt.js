document.body.addEventListener('click', function(e){
    const modal = document.querySelector('.modal.active');
    if (!modal) return;
    if(modal.classList.contains('active')){
        modal.classList.remove('active');

	    var iframe = modal.querySelector( 'iframe');
        if ( iframe ) {
            // after 500ms, set the src attribute to the same value
            // this will reload the iframe
            setTimeout(() => {
                var iframeSrc = iframe.src;
                iframe.src = iframeSrc;
            }, 500);
        }
       
    }
})

const playBtns = document.querySelectorAll('.people__play');


for(let i=0; i<playBtns.length; i++){
    playBtns[i].addEventListener('click', function(e){
        e.stopPropagation();
        if(!document.querySelector('.modal.active')){
            const modal = document.querySelector('.modal'+'.modal-'+(i+1));
            modal.classList.add('active');
        }
    })
}

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
    } 
    else if(formData.get('phoneNumber').replace(/\D/, '').length < 11){
        this.querySelector('[name="phoneNumber"]').classList.add('error');
        this.querySelector('[name="phoneNumber"]').nextElementSibling.innerHTML = '11 сан теріңіз';
    }
    else {
        this.querySelector('[name="phoneNumber"]').classList.remove('error');
    }

    if(!this.querySelector('.error')){
        const chatId = '-1001860607109';
        const testChatId = '660419791'

        const urlSearchParams = new URLSearchParams(window.location.search);
        // get utm_source
        let queryParams = [];

        urlSearchParams.forEach((value, key) => {
            queryParams.push({
                key,
                value
            });
        })
        
        
        // if utm_source is null, set it to 'Сайт'
        if (!queryParams.length){
            queryParams.push({
                key: 'utm_source',
                value: 'Сайт'
            });
        }

        
        const queryParamsText = queryParams.map(item => `${item.key}: ${item.value}`).join('%0A');
        const queryParamsString = queryParams.map(item => `${item.key}=${item.value}`).join('&');
        // ватсап сссылка
        // const text = `👨🏻‍💻Имя: ${formData.get('name')} 
        // 📞Телефон: ${formData.get('phoneNumber')} https://wa.me/${formData.get('phoneNumber').replace(/\D/g, '')}`;
        
        let phTrim = formData.get('phoneNumber').replace(/\D/g, '');
        // replace first 7 with 8
        phTrim = phTrim.replace(/^7/, '8');
        phTrim = phTrim.replace( /(\d{1})(\d{3})(\d{3})(\d{4})/, '8-$2-$3-$4');
        const text = `${formData.get('name')}%0A${phTrim}%0A${queryParamsText}`;

        const token = '5907176700:AAEgfGrnIodBznWdIS9Fh_N5lYmEHA8Yfws';

        // ===========================================
        const website = 'https://script.google.com/macros/s/AKfycbziFrREB7JfQW4HfFEIiv_X1V5ewjHjLy-m91NaM74UHy_7YQlXFGIengy_ubUn1zU_2A/exec'

        const query = `?name=${formData.get('name')}&phoneNumber=${formData.get('phoneNumber')}&${queryParamsString}`
        fetch(website + query, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }, 
            mode: 'no-cors'
        })
        // ===========================================

        // send message to telegram: name and phone number and utm_source
        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors'
        }).then(function(response){

            swal("Өтінім қабылданды!", "Сізбен жақын арада хабарласамыз", "success");
            form.reset();
        }).catch(function(error){
            swal("Қателік!", "Біраз уақыттан кейін қайталап көріңіз", "error");
            form.reset();
        })

    }
   

})