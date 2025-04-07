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
    loginName = document.querySelector("#loginName"),
    loginPassword = document.querySelector("#loginPassword"),
    loginRole = document.querySelector("#loginRole"),
    sendBtn = document.querySelector("#reg"),
    loginBtn = document.querySelector("#logIn")


    
    
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
        const data = await response.json();
        // console.log();
        // Such a user exists
        if (data?.message?.response?.message == "Such a user exists") {

            document.querySelector(".email-info").style.color = "red"
            document.querySelector(".email-info").innerHTML = `
            Bu emaildan foydalanilgan, boshqa email kiriting!
            `
            throw new Error('Network response was not ok ' + response.statusText);
        }else{

            
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            role.value = '';
            password.value = '';
            confirmPass.value = '';
            document.querySelector(".email-info").innerHTML = ""
            await setTimeout(()=>{
                alert("Elektron pochtangizga tasdiqlash havolasi yuborildi!")

            },0)
        }

    } catch (error) {
        console.error('Error:', error);
    }
});


    loginBtn.addEventListener("click", async (event)=>{
        try {
            event.preventDefault()
            // console.log(loginName.value);
    
            const response = await fetch('http://3.78.83.20:3000/api/auth/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": loginName.value,
                    "password": loginPassword.value,
                    "role": loginRole.value
                  })
            });
            const data = await response.json();
            console.log(data);
           if(data.access_token){
                window.location.href = "/index.html";
                const accTok = localStorage.setItem("accTok", data.access_token)
           }
    
        } catch (error) {
            console.error('Error:', error);
        }
    })


}
avtorizatsiya()
