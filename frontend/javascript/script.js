window.onload = () => {

    const dontHaveAccountBtn = document.getElementById("dontHaveAccount")
    const signUpPopup = document.querySelector(".signUpPopup")
    const backFromPopup = document.getElementById("backFromPopup")
    const signupBtn = document.getAnimations("signUpBtn")
    const logInBtn = document.getElementById("logInBtn")
    const logInEmail = document.getElementById("logInEmail")
    const logInPass = document.getElementById("logInPass")

    const signUpName = document.getElementById("signUpName")
    const signUpEmail = document.getElementById("signUpEmail")
    const signUpPhone = document.getElementById("signUpPhone")
    const signUpPass = document.getElementById("logInsignUpPassPass")
    const passConfirm = document.getElementById("passConfirm")



    // Sign up Popup open
    dontHaveAccountBtn.addEventListener("click",() => {
        signUpPopup.style.display = "flex" 
        
        // When Popup is opened add back button option
        if(signUpPopup.style.display == "flex"){
            console.log("hi")
            backFromPopup.addEventListener("click",() => {
                signUpPopup.style.display = "none" 
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
        fetch("http://localhost/twitter-website/backend/apis/APIs/log-in.php")
        .then(results =>results.json())
        .then(data =>{
            let accounts=data

            for(let i=0; i<accounts.length;i++){

                if(email == accounts[i].email){
                    correctEmail = 1
                    if(pass == accounts[i].password){
                        correctEmail = 2
                    }
                    break
                }
            }

            if(correctEmail == 1){
                console.log("wrong password")
            } else if(correctEmail == 2){
                console.log("successful log in")
            } else if(correctEmail == 0){
                console.log("not a valid email, sign in!")
            }

            })
        }   
    })

    // Sign up Popun close
    signupBtn.addEventListener("click", () => {
        fetch("http://localhost/twitter-website/backend/apis/APIs/log-in.php")
        .then(results =>results.json())
        .then(data =>{
            let accounts=data
            console.log(accounts)

            for(let i=0; i<accounts.length;i++){

                if()

            }
            })


    })
}
