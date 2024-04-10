import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup,  } from "firebase/auth";
import app from "../firebase/Firebase.config";


const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()
  

    const {signIn} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log('error', error.message)
      })
      console.log('google mama is coming')
    }
     
    const handleLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
          
            console.log(result.user)
            
        })
        .catch(error => {
            console.error(error)
        })
    }
    // const handleSignOut= () => {
    //   signOut(auth)
    //   .then(result => {
    //     console.log(result)
    //     setUser(null)
    //   })
    //   .catch()
    // }
    
      
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold my-5">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input 
               type={showPassword ? "text" : "password"}  
                name="password"
                 placeholder="Password" 
                 className="input input-bordered w-full" required />
                 <span className="absolute top-3 right-2" onClick={() => {setShowPassword(!showPassword)}}>
                  {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                 </span>
                 </div>
                 <label className="label">
                 <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google Login</button>
          </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>Do not have an account ? <Link className="text-blue-600 font bold" to="/register"> Register Please</Link></p>
          </div>
        </div>
      </div>
    );
}

export default Login;