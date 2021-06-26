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

    if (username && email && password && date_of_birth) {
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
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);