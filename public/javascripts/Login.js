let box = document.querySelector(".box")
let boxAfter = document.querySelector(".box::after")
let boxBefore = document.querySelector(".box::before")

/* */
let signupDiv = document.querySelector(".sign-up-div")
let loginDiv = document.querySelector(".login-div")
let otpVerification = document.querySelector(".otp-verification")
let forgotDiv = document.querySelector(".forgot-div")

/*for the diferent redirectLinks*/
let signUpRedirectLink = document.querySelector(".login-div .redirect-link")
let loginRedirectLink = document.querySelector(".sign-up-div .redirect-link")
let forgotLink = document.querySelector(".login-div .forgot-link")

window.addEventListener("load",function(){
    //for the forgot password div
    forgotLink.addEventListener("click",function(e){
        e.preventDefault()
        let loginActive = document.querySelector(".login-div.active")
        loginActive.classList.remove("active")
        forgotDiv.classList.add("active")
        box2.classList.add("minimize-height")
        boxAfter2.classList.add("minimize-height")
        boxBefore2.classList.add("minimize-height")    
    })

    // for the return to normal if there's a maximize-height class
    loginRedirectLink.addEventListener("click",function(e){
        let box2 = document.querySelector(".box")
        let boxAfter2 = document.querySelector(".box::after")
        let boxBefore2 = document.querySelector(".box::before")

        e.preventDefault()
        let loginDiv3 = document.querySelector(".login-div")
        
        // ensuer you've added thses classes before modifying the boxes cause the order really matters in DOM manipulation
        let signupDiv3 = document.querySelector(".sign-up-div")
        signupDiv.classList.remove("active")
        loginDiv3.classList.add("active")
        

        box2.classList.remove("maximize-height")
        boxAfter2.classList.remove("maximize-height")
        boxBefore2.classList.remove("maximize-height")    

        // however do note this might be risky if we have a lot of unrelated elements with the active class, so be keen
        // add a box to the property to limit the scope of the selector

       
    })

    // This to happen when the signup button has been clicked
    signUpRedirectLink.addEventListener("click",function(e){
        let box2 = document.querySelector(".box")
        let boxAfter2 = document.querySelector(".box::after")
        let boxBefore2 = document.querySelector(".box::before")

        let signupDiv2 = document.querySelector(".sign-up-div")// select the signup div once more since it changed
        let loginDiv2 = document.querySelector(".login-div")
        e.preventDefault()
        // don't use the arbirary .active class it aooarently deletes for good
        loginDiv2.classList.remove("active")
        signupDiv2.classList.add("active")
        box2.classList.add("maximize-height")
        boxAfter2.classList.add("maximize-height")
        boxBefore2.classList.add("maximize-height")    
    })
})
