window.onload = () => {

    const dontHaveAccountBtn = document.getElementById("dontHaveAccount")
    const signUpPopup = document.querySelector(".signUpPopup")
    const backFromPopup = document.getElementById("backFromPopup")
    const signupBtn = document.getElementById("signupBtn")
    const logInBtn = document.getElementById("logInBtn")
    const logInEmail = document.getElementById("logInEmail")
    const logInPass = document.getElementById("logInPass")

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
            console.log("hi")
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
                fetch("http://localhost/twitter-website/backend/apis/APIs/log-in.php",{
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

                    if(valid == 0){
                        console.log("not valid email")
                    } else if(pass != passC){
                        console.log("check password confirmation")
                    } else{
                        // register account
                        fetch("http://localhost/twitter-website/backend/apis/APIs/Sign-up.php",{
                        method:"POST",
                        body: new URLSearchParams({"full_name":name,"email":email,"phone_number":phone,"password":pass})
                        })
                        .then(response => response.json())
                        .then(data => console.log("success"))

                        window.location.href = "index.html"
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
            console.log("Please enter all fields")
        } else{
            // check for email in database + hash entered email
        fetch("http://localhost/twitter-website/backend/apis/APIs/log-in.php",{
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
                    }
                    break
                }
            }

            if(correctEmail == 1){
                console.log("wrong password")
            } else if(correctEmail == 2){
                console.log("successful log in")
                window.location.href = "index.html"
            } else if(correctEmail == 0){
                console.log("not a valid email, sign in!")
            }

        })
        }   
    })

    
}
