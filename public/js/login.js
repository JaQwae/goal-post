const loginFormHandler = async (event) => {

    event.preventDefault();

    // Grabs data from form boxes
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    // console.log(username,  password)
    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Login failed');
        }
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#sign-up-username').value.trim();
    const password = document.querySelector('#sign-up-password').value.trim();
    
    // console.log(username,  password)
    if (username  && password) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.sign-up-form')
    .addEventListener('submit', signupFormHandler);