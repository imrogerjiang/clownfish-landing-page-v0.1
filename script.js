backgroundContainer = document.querySelector("div.popup.page-container");
backgroundContainer.addEventListener("click", (e) =>{
    if(backgroundContainer.classList.contains("show-popup")){
        backgroundContainer.classList.remove("show-popup");
    }
})
popupContainer = document.querySelector("div.popup.form-container");
popupContainer.addEventListener("click", (e) =>{
    e.stopPropagation();
})
signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    backgroundContainer.classList.add("show-popup");
})

