import PropTypes from 'prop-types'

const Input = ({type, title}) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">{title}</label>
        <input 
          type={type} 
          name={title.toLowerCase()} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    )
  }
  
  export default Input

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string
}