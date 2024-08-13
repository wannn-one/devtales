import React, { useState } from "react";
import Input from "../../../utils/Input";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignReq, setModal }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form[("email", "password")] === "") {
      toast.error("All fields are required!!!");
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/dashboard");
      toast.success("User has been logged in ");
      setLoading(false);
    } catch (error) {
      // toast.error(error.message);
      // invalid credentials
      if (error.code === "auth/invalid-credential"){
        toast.error("Invalid credentials, please create account");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-semibold">Sign in with E-mail</h2>
      <p className="text-center text-sm">
        Enter the email address associated with your account,
        and we&apos;ll send a magic link to your inbox
      </p>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <Input form={form} setForm={setForm} type="email" title="email" label="E-mail"/>
        <Input form={form} setForm={setForm} type="password" title="password" label="Password"/>
        <button
          type="submit"
          className={`w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition-colors duration-300 ${loading ? "opacity-50 pointer-events-none" : ""}`}
        >
          Sign In
        </button>
      </form>
      <button 
        className='mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto hover:underline' 
        onClick={() => setSignReq("")}
      >
        <MdKeyboardArrowLeft className="text-xl" />
        All sign in options
      </button>
    </div>
  );
};

export default SignIn;
