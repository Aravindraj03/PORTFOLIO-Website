let id  = (id) => document.getElementById(id);

let classes = (classes) =>document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    message = id("message"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon")
    failureIcon = classes("failure-icon")
    // popMessage = classes("popMessage")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        engine(username, 0, "Username cannot be blank")
        engine(email, 1, "Email cannot be blank")
        engine(message, 2, "Message cannot be blank")
        // console.log(e.target[0].value)
        // document.getElementById("popmess").style = "top: 3%;"
    })

    let engine = (id, serial, message) => {

        if(id.value.trim()==""){
            errorMsg[serial].innerHTML = message;
            id.style.border = "2px solid red";

            //icons
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
        }else{
            errorMsg[serial].innerHTML = "";
            id.style.border = "2px solid green";

            //icons
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";

            // let total =0;
            // if()
        }
        if(username.value !="" && email.value !="" && message.value !=""){
            document.getElementById("popmess").style = "top: 10%;position:fixed;z-index:999";
        }

    }

function button1(){
    document.getElementById("popmess").style = "top:-100%;"
}






