import React, { useState } from "react";
import Modal from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
// import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../../../firebase/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = ({ modal, setModal }) => {
  const [createUser, setCreateUser] = useState(false);
  const [signReq, setSignReq] = useState("");
  const navigate = useNavigate();

  const googleAuth = async () => {
    try {
      const createUser = await signInWithPopup(auth, googleProvider)
      const newUser = createUser.user;

      const ref = doc(db, "users", newUser.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: newUser.uid,
          username: newUser.displayName,
          email: newUser.email,
          userImg: newUser.photoURL,
          bio: "",
        });
        navigate("/dashboard");
        toast.success("User created and signed in");
        setModal(false);
      } else {
        navigate("/dashboard");
        toast.success("User signed in");
        setModal(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  return (
    <Modal modal={modal} setModal={setModal}>
      <section
        className={`z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-11/12 max-w-md bg-white shadow-lg rounded-lg transition-all duration-500
        ${modal ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <LiaTimesSolid className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center gap-4 p-6">
          <h2 className="text-lg font-semibold">
            {createUser ? "Join DevTales!" : "Welcome Back!"}
          </h2>
          {signReq === "" ? (
            <>
              <div className="flex flex-col gap-2 w-full">
                <Button
                  icon={<FcGoogle className="text-lg" />}
                  text={`${createUser ? "Sign up" : "Sign in"} with Google`}
                  click={googleAuth}
                />
                {/* <Button
                  icon={<MdFacebook className="text-base text-blue-600" />}
                  text={`${createUser ? "Sign up" : "Sign in"} with Facebook`}
                /> */}
                <Button
                  click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                  icon={<AiOutlineMail className="text-base" />}
                  text={`${createUser ? "Sign up" : "Sign in"} with Email`}
                />
              </div>
              <p className="text-xs mt-2">
                {createUser ? "Already have an account?" : "No account?"}
                <button
                  onClick={() => setCreateUser(!createUser)}
                  className="text-green-600 hover:text-green-700 font-semibold ml-1 hover:underline"
                >
                  {createUser ? "Sign in" : "Create one"}
                </button>
              </p>
            </>
          ) : signReq === "sign-in" ? (
            <SignIn setModal={setModal} setSignReq={setSignReq} />
          ) : signReq === "sign-up" ? (
            <SignUp setModal={setModal} setSignReq={setSignReq} />
          ) : null}
          <p className="text-xs text-center text-gray-500 mt-2">
            Click "Sign in" to agree to DevTales's Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </Modal>
  );
};

const Button = ({ icon, text, click }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full border border-gray-300 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 transition-all duration-300"
      onClick={click}
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default Auth;