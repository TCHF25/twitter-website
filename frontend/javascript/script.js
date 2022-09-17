window.onload = () => {

    const signUpBtn = document.getElementById("signUpBtn")
    const signUpPopup = document.querySelector(".signUpPopup")
    const backFromPopup = document.getElementById("backFromPopup")
    const create = document.getElementById("signupBtn")
    
    // Sign up Popup open
    signUpBtn.addEventListener("click",() => {
        signUpPopup.style.display = "flex" 
        
        if(signUpPopup.style.display == "flex"){
            console.log("hi")
            backFromPopup.addEventListener("click",() => {
                signUpPopup.style.display = "none" 
            })
        }
    })

    // Sign up Popun close
    create.addEventListener("click", () => {
        console.log("hi")
    })
        

    // Log in check
    



    }
