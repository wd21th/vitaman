
const phoneNumber = document.querySelector('#phoneNumber');


phoneNumber.addEventListener('focus', function(e){
    if(phoneNumber.value.trim() == ''){
        phoneNumber.value = '+7 '
    }
})

phoneNumber.addEventListener('input', function(e){
    if(e.inputType != "deleteContentBackward"){
        const digits = e.target.value.replace(/\D/g, '');
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
            // remove first digit
            digits = digits.slice(1);
            field.value = '+7 ' + digits
        }

        // if(digits.length < 10) {
        //     field.errorText = this.country == 'uz' ? '*Телефон рақами формати нотўғри' :  '*Неверный формат номера телефона'
        //     field.error = true;
        // }else if(digits.length == 10){
        //     field.error = false;
        // }
    }
});

