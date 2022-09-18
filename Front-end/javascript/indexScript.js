window.onload = () => {

    const homeBtn = document.getElementById("homeBtn")
    const homePage = document.getElementById("home")
    const profileBtn = document.getElementById("profileBtn")
    const profilePage = document.getElementById("profile")
    const tweetscontainer = document.getElementById("tweets")
    const editProfileBtn = document.getElementById("editProfile")
    const editProfilePopup = document.querySelector(".editProfilePopup")

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

}