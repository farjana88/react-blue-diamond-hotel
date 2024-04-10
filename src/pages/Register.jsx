import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

     const {createUser} = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, photo, password)

      // reset error
       setRegisterError('');
       setSuccess('')

      //  condition

      if(password.length < 6){
        setRegisterError('Password should be six characters or longer');
        return;
      }
      else if(!/[A-Z]/.test(password)){
        setRegisterError('Password should have at least one upper case character ')
        return;
      }
      else if(!/[a-z]/.test(password)){
        setRegisterError('Password should have at least one lower case character ')
        return;
      }

        // createUser
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('User Created Successfully')
        })
         .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
         })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold my-5">Please Register!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
              </div>
           
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative ">
                <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                 placeholder="Password" 
                 className="input input-bordered w-full " required /> 
                 <span className="absolute top-3 right-2" onClick={() => {setShowPassword(!showPassword)}}>
                  {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                 </span>
              
              </div>
             </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {
                registerError && 
                <p className="text-red-600"> {registerError}</p>
                
                // <div className="toast toast-top toast-center">
                // <div className="alert alert-info">
                //   <span> Already have an account </span>
                // </div>
                // </div>
                
            }
            {
              success &&
              <p className="text-green-600">{success}</p>
              // <div className="toast toast-top toast-center">
              //   <div className="alert alert-info">
              //     <span> Successfully Created </span>
              //   </div>
              //   </div>
            }
            <p>Already have an account ? <Link className="text-blue-600 font bold" to="/login">Please Login</Link></p>
          </div>

        </div>
      </div>
    );
};

export default Register;