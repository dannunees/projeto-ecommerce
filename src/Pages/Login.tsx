
import { SignedOut, SignUp } from "@clerk/clerk-react";
import "../Styles/Pages/Login.scss";


const Login = () => {


    return (
        <div className="pageLogin">
            <SignedOut>
                <SignUp />
            </SignedOut>
        </div>
    )
}

export default Login;