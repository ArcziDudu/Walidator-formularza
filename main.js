const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const inputs = document.querySelectorAll('input')

const showError = (input, msg) =>{
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error');
    errorMsg.textContent = msg;

}
const clearError = input =>{
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}
const checkForm = (input) =>{
    input.forEach(element =>{
        if(element.value === ''){
            showError(element, element.placeholder)
        }else{
            clearError(element)
        }
    })
}
const checkLength = (input, min) =>{
    if(input.value.length < min){
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi składać się z minimum ${min} znaków`)
    }
}
const checkPassword = (pass1, pass2) =>{
    if(pass1.value !== pass2.value){
        showError(pass2, 'hasła muszą być identyczne')
    }
}

const checkMail = (email) => {

       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

       if(re.test(email.value)){
           clearError(email)
       }else{
           showError(email, 'wpisz poprawny adres email')
       }

       
  };
  const checkErrors = () =>{
      const allInputs  = document.querySelectorAll('.form-box');
      let errorCount = 0;
      allInputs.forEach(element =>{
          if(element.classList.contains('error')){
              errorCount++
          }
      })
      if(errorCount === 0){
          popup.classList.add('show-popup');
          
      }
      console.log(errorCount);
  }



  [username, pass, pass2, email].forEach(element =>[
    element.addEventListener('keydown', () =>{
        element.parentElement.classList.remove('error')
    })
])

sendBtn.addEventListener('click', e =>{
    e.preventDefault();
    checkForm([username, pass, pass2, email]);
    checkLength(username, 4)
    checkLength(pass, 5)
    checkPassword(pass, pass2)
    checkMail(email)
    checkErrors()
})
clearBtn.addEventListener('click', e =>{
    e.preventDefault();
    [username, pass, pass2, email].forEach(element =>{
        element.value ='';
        clearError(element)
    })
})






