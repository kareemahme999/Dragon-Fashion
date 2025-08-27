const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
/*****************************************/
function register(){
    let name_user = document.getElementById('name_user').value;
    let email_user = document.getElementById('email_user').value;
    let password_user = document.getElementById('password_user').value;

    if(!email_user.includes("@")){
        Swal.fire({
            title: "Invalid Email!",
            text: "Email must contain @",
            icon: "error",
            background: "#fff"
        });
        return;
    }
    if(name_user && email_user && password_user){
        localStorage.setItem('name', name_user);
        localStorage.setItem('email', email_user);
        localStorage.setItem('password', password_user);

        Swal.fire({
            title: "Success register",
            icon: "success",
            background: '#fff'
        }).then(() => {
            // يفتح login form
            container.classList.remove('active');
        });

    } else {
        Swal.fire({
            title: "Please fill all fields!",
            icon: "error",
            background: "#fff"
        });
    }
}

function login(){
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    let storedname = localStorage.getItem('name');
    let storedpassword = localStorage.getItem('password');

    if(name === storedname && password === storedpassword){
        Swal.fire({
            title: "Login Success 🎉",
            icon: "success",
            background: "#fff"
        }).then(() => {
            window.location.href = "index.html";
        });
    } else {
        Swal.fire({
            title: "Login Failed ❌",
            text: "Wrong username or password. Please register.",
            icon: "error",
            background: "#fff"
        });
    }
}