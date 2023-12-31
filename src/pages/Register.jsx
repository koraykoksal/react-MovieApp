import React, { useContext,useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AutContext } from "../context/AuthContext";

const Register = () => {

  const {createUsers,googleSignUp}=useContext(AutContext)

  const [name, setname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  



  const handleSubmit=(e)=>{

    e.preventDefault()
    const displayName=`${name} ${lastname}`
    createUsers(email,password,displayName)

    setemail("")
    setname("")
    setlastname("")
    setpassword("")
  }


  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a] mt-5">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]" onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer"
              name="floating_text"
              type="text"
              placeholder=" "
              required
              value={name}
              onChange={(e)=>setname(e.target.value)}
            />
            <label htmlFor="floating_text">First Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer"
              name="floating_text"
              type="text"
              placeholder=" "
              required
              value={lastname}
              onChange={(e)=>setlastname(e.target.value)}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer"
              name="floating_email"
              type="email"
              placeholder=" "
              required
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer"
              name="floating_password"
              type="password"
              placeholder=" "
              required
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit" className="btn-danger">
            Register
          </button>
          <button
            type="button"
            className="btn-danger flex justify-between items-center"
            onClick={()=>googleSignUp()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
