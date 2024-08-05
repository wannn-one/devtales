import Modal from "../utils/Modal"
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import PropTypes from 'prop-types';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ isOpen, onClose }) => {
  const [createUser, setCreateUser] = useState(false);
  const [signRequest, setSignRequest] = useState("");

  const handleSetSignRequest = (request) => {
    setSignRequest(request);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative max-h-[90vh] overflow-y-auto py-6 px-4">
        <button 
          className="absolute top-4 right-4 text-2xl hover:opacity-50 z-10"
          onClick={onClose}
        >
          <LiaTimesSolid />
        </button>
        {signRequest === "" ? (
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-2xl font-semibold">
              {createUser ? "Join DevTales!" : "Welcome back!"}
            </h2>
            <div className="w-full space-y-4">
              <Button
                icon={<FcGoogle className="text-xl"/>}
                text={`${createUser ? "Sign up" : "Sign in"} with Google`}
                click={() => handleSetSignRequest(createUser ? "sign-up" : "sign-in")}
              />
              <Button
                icon={<AiOutlineMail className="text-xl"/>}
                text={`${createUser ? "Sign up" : "Sign in"} with Email`}
                click={() => handleSetSignRequest(createUser ? "sign-up" : "sign-in")}
              />
            </div>
            <p className="text-sm text-center">
              {createUser ? "Already have an account? " : "Don't have an account? "}
              <button
                className="text-green-700 font-bold cursor-pointer hover:underline"
                onClick={() => setCreateUser(!createUser)}
              >
                {createUser ? "Sign in" : "Sign up"}
              </button>
            </p>
          </div>
        ) : signRequest === "sign-in" ? (
          <SignIn setSignRequest={handleSetSignRequest} />
        ) : signRequest === "sign-up" ? (
          <SignUp setSignRequest={handleSetSignRequest} />
        ) : null}
      </div>
    </Modal>
  )
}

Auth.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Button = ({ icon, text, click }) => {
  return (
    <button
      className="flex items-center justify-center w-full border border-gray-300 px-4 py-2 rounded-full text-center hover:bg-gray-100 transition-all duration-300 relative"
      onClick={click}
    >
      <span className="absolute left-4">{icon}</span>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default Auth