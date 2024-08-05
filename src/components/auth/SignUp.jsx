import Input from '../utils/Input'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import PropTypes from 'prop-types'

const SignUp = ({ setSignRequest }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-semibold">Sign up with E-mail</h2>
      <p className="text-center text-sm">
        Enter the email address associated with your account,
        and we&apos;ll send a magic link to your inbox
      </p>
      <form className="w-full space-y-4">
        <Input type="username" title="Username"/>
        <Input type="email" title="Email"/>
        <Input type="password" title="Password"/>
        <Input type="password" title="Confirm Password"/>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
        >
          Sign In
        </button>
      </form>
      <button 
        className='mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto' 
        onClick={() => setSignRequest("")}
      >
        <MdKeyboardArrowLeft className="text-xl" />
        All sign up options
      </button>
    </div>
  )
}

SignUp.propTypes = {
  setSignRequest: PropTypes.func.isRequired
}

export default SignUp