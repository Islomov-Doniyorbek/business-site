const container = document.querySelector(".container");
const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");

})
loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
})



function avtorizatsiya(){
    let firstName = document.querySelector("#firstName"),
    lastName = document.querySelector("#lastName"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    confirmPass = document.querySelector("#confirmPassword"),
    tgNickName = document.querySelector("#tgNickName"),
    city = document.querySelector("#city"),
    role = document.querySelector("#role"),
    sendBtn = document.querySelector("#reg")


    
    
    // const API = `https://3.78.83.20`;    
    sendBtn.addEventListener("click", async (event) => {
        try {
            event.preventDefault()
            console.log(firstName.value);
    
            const response = await fetch('http://3.78.83.20:3000/api/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "first_name": firstName.value,
                    "last_name": lastName.value,
                    "email": email.value,
                    "role": role.value.toUpperCase(),
                    "password": password.value,
                    "confirm_password": confirmPass.value
                })
            });
            console.log(response);
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            role.value = '';
            password.value='';
            confirmPass.value='';
            if (!response.ok) {
                if(response.statusText == "this email already exists"){
                    alert("Bu emaildan foydalanilgan, boshqa email kiriting!")
                }
                
                throw new Error('Network response was not ok ' + response.statusText);
            }
            alert("Elektron pochtangizga tasdiqlash havolasi yuborildi!")
    
            const data = await response.json();
            console.log(data);
    
            // Extract access_token from the response
    
        } catch (error) {
            console.error('Error:', error);
        }
    });
}
avtorizatsiya()
