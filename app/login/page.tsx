// Code: Login page
import {SignIn} from "@clerk/nextjs";

const LoginPage = () => {
    return (
        <div className="my-16 flex justify-center">
            <SignIn />
        </div>
    );
};

export default LoginPage;
