const emailbtn = document.getElementById("#emailbtn")

emailbtn.addEventListener("submit", function() {
    const email = emailbtn.dataset.email;
    const name = emailbtn.dataset.name;
    fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email, name }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        console.log(res);
        alert("email sent!");
    }).catch(err => {
        console.log(err);
    })
})