window.onload = () => {

    const homeBtn = document.getElementById("homeBtn")
    const homePage = document.getElementById("home")
    const profileBtn = document.getElementById("profileBtn")
    const profilePage = document.getElementById("profile")
    const tweetscontainer = document.getElementById("tweets")
    const editProfileBtn = document.getElementById("editProfile")
    const editProfilePopup = document.querySelector(".editProfilePopup")
    const changePhoto = document.getElementById("file")
    const profilePhoto = document.getElementById("pp")

    homeBtn.addEventListener("click",() =>{

        homePage.style.display = "flex"
        tweetscontainer.style.display = "flex"
        profilePage.style.display = "none"
        editProfilePopup.style.display = "none"
    })

    profileBtn.addEventListener("click",() =>{

        homePage.style.display = "none"
        tweetscontainer.style.display = "none"
        profilePage.style.display = "flex"
        editProfilePopup.style.display = "none"
    })

    editProfileBtn.addEventListener("click", () =>{
        editProfilePopup.style.display = "flex"

    })

    changePhoto.addEventListener("change", e =>{
        const reader = new FileReader()
        let file = changePhoto.files[0]

        reader.addEventListener("load", () => {
            let image = reader.result
            let username = "taha"
            fetch("http://localhost/twitter-website/backend/account.php",{
                method:"POST",
                body: new URLSearchParams({"base64String":image,"username":username})
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let imgURL = `../backend/profile-photos/${username}.png`
                console.log(imgURL)
                profilePhoto.innerHTML = `<img src="${imgURL}" class="profile-pic"/>`
            })
        })

        reader.readAsDataURL(file)
    })
    }
