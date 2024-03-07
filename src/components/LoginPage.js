import { useState } from "react";

function LoginPage(){

    let [isRegisterOpened, setIsRegisterOpened] = useState(false)

    function registerValidation(){
        let nickInput = document.getElementById("reg-nick")
        let emailInput = document.getElementById("reg-email")
        let passwordInput = document.getElementById("reg-pswd")
        let repeatPasswordInput = document.getElementById("reg-repswd")
        let nextBtn = document.getElementById("reg-next")

        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //8 signs, number, lower and upper case, special symbol

        let isNickOk = false
        let isEmailOk = false
        let ispasswordOk = false
        let isRePasswordOk = false

        if(nickInput.value.length >= 8 && nickInput.value.length <=32){
            isNickOk = true
        }else{
            isNickOk = false
        }

        if(emailInput.value.match(emailRegex)){
            isEmailOk = true
        }else{
            isEmailOk = false
        }
        
        if(passwordInput.value.match(passwordRegex)){
            ispasswordOk = true
        }else{
            ispasswordOk = false
        }

        if(passwordInput.value === repeatPasswordInput.value){
            isRePasswordOk = true
        }else{
            isRePasswordOk = false
        }

        if(isNickOk && isEmailOk && ispasswordOk && isRePasswordOk){
            nextBtn.disabled = false
        }else{
            nextBtn.disabled = true
        }
    }

    return(
        <div className="login-page">
            <div className="left">
                <img src="imgs/logo.svg" alt="logo" className='logo'/>
            </div>
            <div className="right">
                <div className="headings">
                    <h1>Happening now</h1>
                    <h3>Join today.</h3>
                </div>
                <div className="btns-container">
                    <button>Continue with Google</button>
                    <div className="text-container">
                        <div className="left-line"></div>
                        <p>or</p>
                        <div className="right-line"></div>
                    </div>
                    <button onClick={()=>setIsRegisterOpened(true)}>Create account</button>
                    <h6>Already have an account?</h6>
                    <button>Sign in</button>
                </div>
            </div>
            {isRegisterOpened ? 
            <div className="create-account-popup">
                <div className="container">
                    <p onClick={()=>setIsRegisterOpened(false)}>&#10006;</p>
                    <img src="imgs/logo.svg" alt="logo" className='logo'/>
                    <div className="inputs-container">
                        <h3>Create your account</h3>
                        <input onChange={registerValidation} maxLength={30} type="text" name="reg-nick" id="reg-nick" placeholder="Nick"/>
                        <input onChange={registerValidation} type="email" name="reg-email" id="reg-email" placeholder="E-mail"/>
                        <input onChange={registerValidation} type="password" name="reg-pswd" id="reg-pswd" placeholder="Password"/>
                        <input onChange={registerValidation} type="password" name="reg-repswd" id="reg-repswd" placeholder="Repeat password"/>
                        <button onClick={()=>{console.log(222)}} disabled={true} id="reg-next">Next</button>
                    </div>
                </div>
            </div>: null}
        </div>
    )
}

export default LoginPage;