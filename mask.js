const phoneNumber=document.querySelector("#phoneNumber");phoneNumber.addEventListener("focus",(function(e){""==phoneNumber.value.trim()&&(phoneNumber.value="+7 ")})),phoneNumber.addEventListener("input",(function(e){if("deleteContentBackward"!=e.inputType){let digits=e.target.value.replace(/\D/g,"");const field=e.target;if(4==digits.length){var firstStage=/(\d{1})(\d{3})/;field.value=digits.replace(firstStage,"+7  ")}else if([5,6].includes(digits.length)){var firstStage=/(\d{1})(\d{3})(\d+)/;field.value=digits.replace(firstStage,"+7  ")}else if(7==digits.length){var secondStage=/(\d{1})(\d{3})(\d{3})/;field.value=digits.replace(secondStage,"+7   ")}else if([8,9,10,11].includes(digits.length)){var secondStage=/(\d{1})(\d{3})(\d{3})(\d+)/;field.value=digits.replace(secondStage,"+7   ")}else 1==digits.length?field.value="+7 "+digits:(digits=digits.slice(1),field.value="+7 "+digits);digits.length<11?(this.classList.add("error"),this.nextElementSibling.innerHTML="11 сан теріңіз"):11==digits.length&&(this.classList.remove("error"),this.nextElementSibling.innerHTML="Телефон номеріңізді енгізіңіз")}})),phoneNumber.addEventListener("paste",(function(e){setTimeout(()=>{let digits=phoneNumber.value.replace(/\D/g,"");const field=e.target;if(4==digits.length){var firstStage=/(\d{1})(\d{3})/;phoneNumber.value=digits.replace(firstStage,"+7  ")}else if([5,6].includes(digits.length)){var firstStage=/(\d{1})(\d{3})(\d+)/;phoneNumber.value=digits.replace(firstStage,"+7  ")}else if(7==digits.length){var secondStage=/(\d{1})(\d{3})(\d{3})/;phoneNumber.value=digits.replace(secondStage,"+7   ")}else if([8,9,10,11].includes(digits.length)){var secondStage=/(\d{1})(\d{3})(\d{3})(\d+)/;phoneNumber.value=digits.replace(secondStage,"+7   ")}else digits.length>11?(digits=digits.slice(0,11),phoneNumber.value=digits.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/,"+7   ")):1==digits.length?field.value="+7 "+digits:(digits=digits.slice(1),field.value="+7 "+digits);digits.length<11?(this.classList.add("error"),this.nextElementSibling.innerHTML="11 сан теріңіз"):11==digits.length&&(this.classList.remove("error"),this.nextElementSibling.innerHTML="Телефон номеріңізді енгізіңіз")},200)})),phoneNumber.addEventListener("keyup",(function(e){let digits=e.target.value.replace(/\D/g,"");digits.length?digits.length<11&&(this.classList.add("error"),this.nextElementSibling.innerHTML="11 сан теріңіз"):(this.classList.add("error"),this.nextElementSibling.innerHTML="Телефон номеріңізді енгізіңіз")}));const inputName=document.querySelector("#name");inputName.addEventListener("input",(function(e){if("deleteContentBackward"!=e.inputType){let value;e.target.value.length>0&&this.classList.remove("error")}})),inputName.addEventListener("keyup",(function(e){let value;e.target.value.length||this.classList.add("error")}));