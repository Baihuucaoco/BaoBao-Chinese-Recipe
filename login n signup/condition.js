import { Firebase } from "./class/firebase.js"

const firebase = new Firebase()
async function handleSubmitLogin(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    try {
        await firebase.login(email, password);
        alert("Đăng nhập thành công");
        
		window.location.href="index.html"
		
    } catch (error) {
        alert("Something went wrong" + error.message);
    }
}

document.getElementById("login-form").addEventListener("submit", handleSubmitLogin)
