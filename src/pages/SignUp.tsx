import { HTMLInputTypeAttribute } from "react";
type InputProps = {
  label: string,
  value: string,
  type?: HTMLInputTypeAttribute,
  // inputSx?: string,
  inputSx?: React.ComponentProps<'div'>['className'];
  // inputSx?: React.HTMLAttributes<HTMLInputElement>['className'];
}

function Input({label, value, type = 'text', inputSx}: InputProps){
  return(
    <div className="grid">
      <label htmlFor={value} className="sr-only">
        {label}:
      </label>
      <input 
        type={type}
        placeholder={label}
        id={value}
        className={`border-gray-400 border rounded-md p-[11px] leading-[16px] ${inputSx}`}
      />
    </div>
  )
}

function SignUp() {
  return (
    <div className="max-w-[600px] p-10 bg-[#1a1a1a] space-y-4">
      <h1 className="text-white text-[2rem]">Sign Up</h1>
      <form className="grid  justify-stretch text-[1rem] gap-y-3">
        <div className="grid grid-flow-col gap-2 ">
          <Input inputSx="" label={'First Name'} value={'firstName'}/>
          <Input inputSx="" label={'Last Name'} value={'lastName'}/>
        </div>
        <Input label={'Email'} value={'email'} type="email" />
        <Input label={'username'} value={'username'}/>
        <Input label={'password'} value={'password'} type="password" />
        <button type="button" className="text-white">Submit</button>
      </form>
    </div>
  )
}

export default SignUp