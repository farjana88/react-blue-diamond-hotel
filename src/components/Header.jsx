import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()

  }

    const navlinks = <>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/login">Login</NavLink></li>
         <li><NavLink to="/register">Register</NavLink></li>
         <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
         <li><NavLink to="/userprofile">User Profile</NavLink></li>
      
    
    </>
    return (
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BLUE DIAMOND HOTEL</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
    {
      user ?
     <button onClick={handleSignOut} className="btn">Sign Out</button>
      :
      <Link to="/login">
      <button className="btn">Login</button>
      </Link>
    }
    
  </div>
</div>
    );
};

export default Header;