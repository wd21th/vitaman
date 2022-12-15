
const phoneNumber = document.querySelector('#phoneNumber');


phoneNumber.addEventListener('focus', function(e){
    if(phoneNumber.value.trim() == ''){
        phoneNumber.value = '+7 '
    }
})

phoneNumber.addEventListener('input', function(e){
    if(e.inputType != "deleteContentBackward"){
        let digits = e.target.value.replace(/\D/g, '');
        const field = e.target;
        
        if(digits.length == 4){
            var firstStage = /(\d{1})(\d{3})/
            field.value = digits.replace(firstStage, '+7 $2 ');
        }
        else if([5, 6].includes(digits.length)){
            var firstStage = /(\d{1})(\d{3})(\d+)/
            field.value = digits.replace(firstStage, '+7 $2 $3');
        }
        else if(digits.length == 7){
            var secondStage = /(\d{1})(\d{3})(\d{3})/
            field.value = digits.replace(secondStage, '+7 $2 $3 ');
        }
        else if([8, 9, 10, 11].includes(digits.length)){
            var secondStage = /(\d{1})(\d{3})(\d{3})(\d+)/
            field.value = digits.replace(secondStage, '+7 $2 $3 $4');
        }
        else {
            if(digits.length == 1){
                field.value = '+7 ' + digits
            }else {
                // remove first digit
                digits = digits.slice(1);
                
                field.value = '+7 ' + digits
            }
            
        }

        if(digits.length < 11){
            this.classList.add('error');
            this.nextElementSibling.innerHTML = '11 сан теріңіз';
        }
        else if(digits.length == 11){
            this.classList.remove('error');
            this.nextElementSibling.innerHTML = 'Телефон номеріңізді енгізіңіз';
        }
    }
});

phoneNumber.addEventListener('paste', function(e){
setTimeout(() => {
        
    
    let digits = phoneNumber.value.replace(/\D/g, '');
    console.log('e.target.value :', e.target.value);
    console.log('digits :', digits);
    const field = e.target;
    
    if(digits.length == 4){
        var firstStage = /(\d{1})(\d{3})/
        phoneNumber.value = digits.replace(firstStage, '+7 $2 ');
    }
    else if([5, 6].includes(digits.length)){
        var firstStage = /(\d{1})(\d{3})(\d+)/
        phoneNumber.value = digits.replace(firstStage, '+7 $2 $3');
    }
    else if(digits.length == 7){
        var secondStage = /(\d{1})(\d{3})(\d{3})/
        phoneNumber.value = digits.replace(secondStage, '+7 $2 $3 ');
    }
    else if([8, 9, 10, 11].includes(digits.length)){
        var secondStage = /(\d{1})(\d{3})(\d{3})(\d+)/
        phoneNumber.value = digits.replace(secondStage, '+7 $2 $3 $4');
    }
    else if(digits.length > 11){
        console.log('digits.length :', digits.length);
        console.log('digits :', digits);
        console.log("It works")
        digits = digits.slice(0, 11);
        phoneNumber.value = digits.replace( /(\d{1})(\d{3})(\d{3})(\d{4})/, '+7 $2 $3 $4')
    }
    else {
        if(digits.length == 1){
            field.value = '+7 ' + digits
        }else {
            // remove first digit
            digits = digits.slice(1);
            
            field.value = '+7 ' + digits
        }
        
    }

    console.log('digits :', digits);
    if(digits.length < 11){
        this.classList.add('error');
        this.nextElementSibling.innerHTML = '11 сан теріңіз';
    }
    else if(digits.length == 11){
        this.classList.remove('error');
        this.nextElementSibling.innerHTML = 'Телефон номеріңізді енгізіңіз';
    }

   

}, 200);

})

phoneNumber.addEventListener('keyup', function(e){
    let digits = e.target.value.replace(/\D/g, '');
    // if(e.inputType == "deleteContentBackward") {
        if(!digits.length){
            this.classList.add('error');
            this.nextElementSibling.innerHTML = 'Телефон номеріңізді енгізіңіз';
        }else if(digits.length < 11){
            this.classList.add('error');
            this.nextElementSibling.innerHTML = '11 сан теріңіз';
        }
    // }
})


const inputName = document.querySelector('#name');
inputName.addEventListener('input', function(e){
    if(e.inputType != "deleteContentBackward"){
        let value = e.target.value;
        if(value.length > 0){
            this.classList.remove('error');
        }
    }
})

inputName.addEventListener('keyup', function(e){
    let value = e.target.value;
    if(!value.length){
        this.classList.add('error');
    }
})