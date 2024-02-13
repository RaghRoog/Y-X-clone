
function LoginPage(){

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
                    <button>Create account</button>
                    <h6>Already have an account?</h6>
                    <button>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;