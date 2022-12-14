window.onload = () => {

    const dontHaveAccountBtn = document.getElementById("dontHaveAccount")
    const signUpPopup = document.querySelector(".signUpPopup")
    const backFromPopup = document.getElementById("backFromPopup")
    const signupBtn = document.getElementById("signupBtn")
    const logInBtn = document.getElementById("logInBtn")
    const logInEmail = document.getElementById("logInEmail")
    const logInPass = document.getElementById("logInPass")
    const logInInteractionBox = document.getElementById("logInInteractionBox")
    const signUpInteractionBox = document.getElementById("signUpInteractionBox")
    const signUpName = document.getElementById("signUpName")
    const signUpEmail = document.getElementById("signUpEmail")
    const signUpPhone = document.getElementById("signUpPhone")
    const signUpPass = document.getElementById("signUpPass")
    const passConfirm = document.getElementById("passConfirm")





    // Sign up Popup open
    dontHaveAccountBtn.addEventListener("click",() => {
        signUpPopup.style.display = "flex" 
        
        // When Popup is opened add back button option / signUp option
        if(signUpPopup.style.display == "flex"){
            backFromPopup.addEventListener("click",() => {
                signUpPopup.style.display = "none" 
            })
        
            // Sign up Popun new account
            signupBtn.addEventListener("click", () => {
                
                let name = signUpName.value
                let email = signUpEmail.value
                let phone = signUpPhone.value
                let pass = signUpPass.value
                let passC = passConfirm.value

                // make sure entered email is unique
                fetch("http://localhost/twitter-website/backend/log-in.php",{
                method:"POST",
                body: new URLSearchParams({"password":0})
                })
                .then(results =>results.json())
                .then(data =>{
                    let accounts=data
                    delete accounts["hashedpass"]
                    let length = Object.keys(accounts).length
                    let valid = 1

                    for(let i=0; i<length;i++){
                        if(email == accounts[i].email){
                            valid = 0
                            break
                        }
                    }
                    if(name == "" ||email == "" ||phone == "" ||pass == "" ||passC == ""){
                        signUpInteractionBox.innerHTML = "<p>Please enter all fields</p>"
                    }else{
                        if(valid == 0){
                            signUpInteractionBox.innerHTML = "<p>Not valid email</p>"
                        } else if(pass != passC){
                            signUpInteractionBox.innerHTML = "<p>Check password confirmation</p>"
                        } else{
                            // register account
                            fetch("http://localhost/twitter-website/backend/Sign-up.php",{
                            method:"POST",
                            body: new URLSearchParams({"full_name":name,"email":email,"phone_number":phone,"password":pass})
                            })
                            .then(response => response.json())
                            .then(data => console.log("Success"))

                            window.location.href = "main.html"
                        }
                    }
                })
            })
        }
    })
        
    // Log in check
    logInBtn.addEventListener("click", () => {
        
        let email = logInEmail.value
        let pass = logInPass.value
        let correctEmail = 0

        if(email == "" || pass == ""){
            logInInteractionBox.innerHTML = "<p>Please enter all fields</p>"
        } else{
            // check for email in database + hash entered email
        fetch("http://localhost/twitter-website/backend/log-in.php",{
            method:"POST",
            body: new URLSearchParams({"password":pass})
        })
        .then(results =>results.json())
        .then(data =>{
            let accounts=data
            let hashedpass = accounts.hashedpass
            delete accounts["hashedpass"]
            length = Object.keys(accounts).length

            for(let i=0; i<length;i++){
                if(email == accounts[i].email){
                    correctEmail = 1
                    console.log(hashedpass,accounts[i].password)

                    if(hashedpass == accounts[i].password){
                        correctEmail = 2
                        localStorage.setItem("id",accounts[i].id)
                        localStorage.setItem("full_name",accounts[i].full_name)
                        localStorage.setItem("email",accounts[i].email)
                        localStorage.setItem("date_joined",accounts[i].date_joined)
                        localStorage.setItem("password",accounts[i].password)
                        localStorage.setItem("phone_number",accounts[i].phone_number)

                        console.log(localStorage)
                    }
                    break
                }
            }

            

            if(correctEmail == 1){
                logInInteractionBox.innerHTML = "<p>Wrong Password</p>"
            } else if(correctEmail == 2){
                console.log("successful log in")
                window.location.href = "main.html"
            } else if(correctEmail == 0){
                logInInteractionBox.innerHTML = "<p>Not a valid email, sign in!</p>"
            }

        })
        }   
    })


    
}
