import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLInputTypeAttribute } from "react";
import  {useForm, type FieldValues, FieldErrors} from 'react-hook-form';
import { signUpSchema, TSignUpSchema } from "../utils/types";


type InputProps = {
  label: string,
  id: string,
  type?: HTMLInputTypeAttribute,
  // inputSx?: React.ComponentProps<'div'>['className'];
  inputSx?: React.HTMLAttributes<HTMLInputElement>['className'];
  inputProps?: React.HTMLProps<HTMLInputElement>,
  errors?: FieldErrors<FieldValues>
}

function Input({label, id, type = 'text', inputSx, inputProps, errors}: InputProps){
  return(
    <div className="grid">
      <label htmlFor={id} className="sr-only">
        {label}:
      </label>
      <input 
        type={type}
        placeholder={label}
        id={id}
        className={`border-gray-400 border rounded-md p-[11px] leading-[16px] ${inputSx}`}
        {...inputProps}
      />
      {errors && errors[id] && <p className="text-red-500">{`${errors[id].message}`}</p>}
    </div>
  )
}

function SignUp() {

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async (data: TSignUpSchema) => {
    // TODO: submit to server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("errors:", errors)
    console.log(data)
    reset();
  }

  return (
    <div className="max-w-[600px] p-10 bg-[#1a1a1a] space-y-4">
      <h1 className=" text-[2rem] text-white">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid  justify-stretch text-[1rem] gap-y-3">
        <div className="grid items-start grid-flow-col gap-2 ">
          <Input label='First Name' id='firstName' errors={errors}
            inputProps={{...register("firstName")}}
          />
          <Input label='Last Name' id='lastName' errors={errors}
            inputProps={{...register("lastName")}}
          />
          {/* <div className="grid">
            <label htmlFor='lastName' className="sr-only">Last Name:</label>
            <input placeholder='Last Name' id='lastName'
              className={`border-gray-400 border rounded-md p-[11px] leading-[16px]`}
              {...register("lastName", { 
                required: 'Last Name is required'
              }
              )}
            />
            {errors.lastName && <p className="text-red-500">{`${errors.lastName.message}`}</p>}
          </div> */}
        </div>
        <Input label='Email' id='email' type="email" errors={errors}
          inputProps={{...register("email")}}
        />
        <Input label='username' id='username' errors={errors}
          inputProps={{...register("username")}}
        />
        <Input label='password' id='password' type="password" errors={errors}
          inputProps={{...register("password")}}
        />
        <button disabled={isSubmitting} type="submit" className="text-white disabled:bg-gray-500">Submit</button>
      </form>
      {/* <div className="bg-red-600 h-4">
        <pre>{errors && JSON.stringify(errors, undefined, 2)}</pre>
      </div> */}
    </div>
  )
}

export default SignUp