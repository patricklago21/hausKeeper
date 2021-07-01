let validUser = true;
let validEmail = true;

async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#firstName').value.trim();
    const last_name = document.querySelector('#lastName').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();
    const address_line_1 = document.querySelector('#address').value.trim();
    const address_line_2 = document.querySelector('#address2').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip_code = document.querySelector('#zip').value.trim();
    const date_of_birth = document.querySelector('#birthdate').value.trim();

    if (username && email && password && date_of_birth && validEmail && validUser) {
        const response = await fetch('/api/clients', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                first_name,
                last_name,
                date_of_birth,
                address_line_1,
                address_line_2,
                city,
                zip_code,
                state
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    } else {
        let formMessage = document.querySelector('.form-validation');
        formMessage.innerHTML = 'E-mail and Username are mandatory fields and must be unique, please enter new values for these fields.';
    }
}

async function checkUsername(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username').value.trim();

    const response = await fetch('/api/clients/username/' + username, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    });
    
    let messageBox = document.querySelector('.username-feedback');
    
    if (response.ok) {
      messageBox.innerText = 'Username already exists, please enter a different one.';
      let userValidation = document.querySelector('#user-validation');
      userValidation.className = 'error oi oi-circle-x';
      validUser = false;
    } else {
      messageBox.innerHTML = '';
      document.querySelector('.form-validation').innerHTML = '';
      let userValidation = document.querySelector('#user-validation');
      userValidation.className = 'ok oi oi-circle-check';
      validUser = true;
    }
}

async function checkEmail(event) {
    event.preventDefault();
    
    const username = document.querySelector('#email').value.trim();

    const response = await fetch('/api/clients/email/' + username, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    });
    
    let messageBox = document.querySelector('.email-feedback');
    
    if (response.ok) {
      messageBox.innerText = 'Email already exists, please enter a different one.';
      let userValidation = document.querySelector('#email-validation');
      userValidation.className = 'error oi oi-circle-x';
      validEmail = false;
    } else {
      messageBox.innerHTML = '';
      document.querySelector('.form-validation').innerHTML = '';
      let userValidation = document.querySelector('#email-validation');
      userValidation.className = 'ok oi oi-circle-check';
      validEmail = true;
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('#username').addEventListener('blur', checkUsername);
document.querySelector('#email').addEventListener('blur', checkEmail);