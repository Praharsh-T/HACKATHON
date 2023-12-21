

let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    console.log('phone:', phone.value);
    console.log('Password:', password.value);
    // process and send to API 
});


