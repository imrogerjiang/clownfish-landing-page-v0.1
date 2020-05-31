popupContainer = document.querySelector("div.popup.page-container");
popupContainer.addEventListener("click", (e) =>{
    if(popupContainer.classList.contains("show-popup")){
        popupContainer.classList.remove("show-popup");
    }
})
signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click", (e) => {
    popupContainer.classList.add("show-popup");
})

