window.onload = () => {

    console.log(localStorage)
    fetch("http://localhost/twitter-website/backend/get_account.php",{
        method:"POST",
        body: new URLSearchParams({"id":localStorage.getItem("id")})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    const profileName = document.getElementById("profileName")
    const profileEmail = document.getElementById("profileEmail")

    profileName.innerHTML = localStorage.getItem("full_name")
    profileEmail.innerHTML = localStorage.getItem("email")


    const homeBtn = document.getElementById("homeBtn")
    const homePage = document.getElementById("home")
    const profileBtn = document.getElementById("profileBtn")
    const profilePage = document.getElementById("profile")
    const tweetscontainer = document.getElementById("tweets")
    const changePhoto = document.getElementById("file")
    const profilePhoto = document.getElementById("pp")
    
    homeBtn.addEventListener("click",() =>{

        homePage.style.display = "flex"
        tweetscontainer.style.display = "flex"
        profilePage.style.display = "none"
    })

    profileBtn.addEventListener("click",() =>{

        homePage.style.display = "none"
        tweetscontainer.style.display = "flex"
        profilePage.style.display = "flex"
    })


    changePhoto.addEventListener("change", e =>{
        const reader = new FileReader()
        let file = changePhoto.files[0]

        reader.addEventListener("load", () => {
            let image = reader.result
            let username = "taha"
            fetch("http://localhost/twitter-website/backend/photo.php",{
                method:"POST",
                body: new URLSearchParams({"base64String":image,"username":localStorage.getItem("email")})
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let imgURL = `../backend/profile-photos/${localStorage.getItem("email")}.png`
                console.log(imgURL)
                profilePhoto.innerHTML = `<img src="${imgURL}" class="profile-pic"/>`
            })
        })

        reader.readAsDataURL(file)
    })
    }
