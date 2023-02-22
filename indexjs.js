const form = document.getElementById('form');
const lname = document.getElementById('lname');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const pnum = document.getElementById('pnum');
const messages = document.getElementById('messages');
const submitBtn = document.getElementById('submit-btn');



form.addEventListener('submit', e => {
    e.preventDefault();
  
    validateInputs();
  
    
    if (isFormValid()) {
      
        const messageData = {
          email: email.value.trim(),
          messages: messages.value.trim(),
          pnum: pnum.value.trim(),
        };
        saveArticleToLocalStorage(messageData);
      
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const pnumValue = pnum.value.trim();
    const messagesValue = messages.value.trim();
   
    

    if(fnameValue === '') {
        setError(fname, 'First name is required');
    } else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last name is required');
    }  else {
        setSuccess(lname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    }  else {
        setSuccess(email);
    }

    if(pnumValue === '') {
        setError(pnum, 'Phone number is required');
    }  else {
        setSuccess(pnum);
    }

    if(messagesValue === '') {
        setError(messages, 'A message is required');
    }  else {
        setSuccess(messages);
    }
};



const isFormValid = () => {
    const emailValue = email.value.trim();
    const messagesValue = messages.value.trim();
    const pnumValue = pnum.value;
   
  
    return emailValue !== '' && messagesValue !== '' && pnumValue !== '' ;
  }
  
  const saveArticleToLocalStorage = messageData => {
    let messageform = [];
  
    const existingmessages = localStorage.getItem('messageform');
    if (existingmessages) {
      messageform = JSON.parse(existingmessages);
      if (!Array.isArray(messageform)) {
        messageform = [];
      }
    }
  
    messageform.push(messageData);
  
    localStorage.setItem('messageform', JSON.stringify(messageform));
    alert('Message Sent successfully!');
    console.log(messageform);
    
  }
  
  
  
