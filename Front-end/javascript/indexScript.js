window.onload = () => {

    const homeBtn = document.getElementById("homeBtn")
    const homePage = document.getElementById("home")
    const profileBtn = document.getElementById("profileBtn")
    const profilePage = document.getElementById("profile")
    const tweetscontainer = document.getElementById("tweets")

    homeBtn.addEventListener("click",() =>{

        homePage.style.display = "flex"
        tweetscontainer.style.display = "flex"
        profilePage.style.display = "none"
    })

    profileBtn.addEventListener("click",() =>{

        homePage.style.display = "none"
        tweetscontainer.style.display = "none"
        profilePage.style.display = "flex"
    })


}