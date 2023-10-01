import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // Create User
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
            .catch(error=> console.log(error))
    }

    return (
        <div className="">
            <div className="w-md mx-auto text-center">
                <h2 className="text-center text-3xl">Please register</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="email">Email: </label>
                    <input className="w-1/3 px-2" type="email" name="email" id="email" placeholder="Email Address"/>
                    <br />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input className="w-1/3 px-2" type="password" name="password" id="password" placeholder="Password"/>
                    <br />
                    <br />
                    <input type="submit" value="Register" className=" brn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default Register;