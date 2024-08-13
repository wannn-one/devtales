import React, { useState } from "react";
import Input from "../../../utils/Input";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

const SignUp = ({ setSignReq, setModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.username === "" || form.email === "" || form.password === "" || form.confirmpassword === "") {
      // console.log(form);
      toast.error("All fields are required");
    } else if (form.password !== form.confirmpassword) {
      toast.error("Your passwords are not matching!!");
      return;
    } else {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const ref = doc(db, "users", user.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: user.uid,
          username: form.username,
          email: form.email,
          userImg: "",
          bio: "",
        });
        navigate("/dashboard");
        toast.success("User have been Signed in");
        setModal(false);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-semibold">Sign up with E-mail</h2>
      <p className="text-center text-sm">
        Enter the email address associated with your account,
        and we&apos;ll send a magic link to your inbox
      </p>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <Input form={form} setForm={setForm} type="username" title="username" label="Username"/>
        <Input form={form} setForm={setForm} type="email" title="email" label="E-mail"/>
        <Input form={form} setForm={setForm} type="password" title="password" label="Password"/>
        <Input form={form} setForm={setForm} type="password" title="confirmpassword" label="Confirm Password"/>
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
        All sign up options
      </button>
    </div>
  );
};

export default SignUp;
