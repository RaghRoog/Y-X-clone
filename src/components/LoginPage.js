import { useState } from "react";

function LoginPage(){

    let [isRegisterOpened, setIsRegisterOpened] = useState(false)

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
                        <input maxLength={30} type="text" name="reg-nick" id="reg-nick" placeholder="Nick"/>
                        <input type="email" name="reg-email" id="reg-email" placeholder="E-mail"/>
                        <input type="password" name="reg-pswd" id="reg-pswd" placeholder="Password"/>
                        <input type="password" name="reg-repswd" id="reg-repswd" placeholder="Repeat password"/>
                        <button disabled={true} >Next</button>
                    </div>
                </div>
            </div>: null}
        </div>
    )
}

export default LoginPage;