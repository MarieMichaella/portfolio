const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const button = document.querySelector('button[type="submit"]');



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

function validatePassword(password) {
    return password.length > 8;
  }


 function addUserToLocalStorage(username, password, email) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Generate a unique ID for the new user
  const id = Date.now().toString();

  // Create a new user object with the ID and other data
  const user = { id, username, password, email };

  // Push the new user object to the users array
  users.push(user);

  // Store the updated users array in localStorage
  localStorage.setItem("users", JSON.stringify(users));
}

  

  const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "email is required");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Your password must have more than 8 characters");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Password is required");
  } else if (password2Value != "" && password2Value != passwordValue) {
    setError(password2, "Passwords do not match");
  } else {
    setSuccess(password2);
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (button.textContent === "Log in") {
    // If user is logging in, check if username and password exist in local storage
    const user = users.find(
      (user) => user.username === usernameValue && user.password === passwordValue
    );

    if (!user) {
      setError(password, "Username or password is incorrect");
      setError(username, "Username or password is incorrect");
    } else {
      window.location.replace("index1.html");
    }
  } else {
   
    const existingUser = users.find((user) => user.username === usernameValue);

    if (existingUser) {
      setError(username, "Username already exists");
    } else {
      setSuccess(username);
      addUserToLocalStorage(usernameValue, passwordValue, emailValue);
      window.location.replace("index1.html");
    }
  }
};
