const form = document.getElementById('form');
const Articlename = document.getElementById('Articlename');
const ArticleDescription = document.getElementById('ArticleDescription');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
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
    const ArticlenameValue = Articlename.value.trim();
    const ArticleDescriptionValue = ArticleDescription.value.trim();
    const messageValue = message.value.trim();
    
    if(ArticlenameValue === '') {
        setError(Articlename, 'Article Name is required');
    }  
    else {
        setSuccess(Articlename);
    }

    
    if(ArticleDescriptionValue === '') {
        setError(ArticleDescription, 'Article Description is required');
    }  
    else {
        setSuccess(ArticleDescription);
    }

    if(messageValue === '') {
        setError(message, 'Article Content is required');
    }  
    else {
        setSuccess(message);
    }

    
};
