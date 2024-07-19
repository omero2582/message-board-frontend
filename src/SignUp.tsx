type InputProps = {
  label: string,
  value: string,
}

function Input({label, value}: InputProps){
  return(
    <div>
      <label htmlFor={value} className="sr-only">
        {label}:
      </label>
      <input placeholder={label} id={value} className="border-gray-400 border rounded-md">
      </input>
    </div>
  )
}

function SignUp() {
  return (
    <div className="grid">
      {[
        { label: 'First Name', value: 'firstName' },
        { label: 'Last Name', value: 'lastName' },
        { label: 'Email', value: 'email' },
        { label: 'username', value: 'username' },
        { label: 'password', value: 'password' } 
      ].map(({label, value}) => (
        <div>
          <label htmlFor={value} className="sr-only">
            {label}:
          </label>
          <input placeholder={label} id={value} className="border-gray-400 border rounded-md">
          </input>
        </div>
      ))}
    </div>
  )
}

export default SignUp