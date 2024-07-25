import { HTMLInputTypeAttribute } from "react";
import  {useForm, type FieldValues, FieldErrors} from 'react-hook-form';

type InputProps = {
  label: string,
  value: string,
  type?: HTMLInputTypeAttribute,
  // inputSx?: string,
  // inputSx?: React.ComponentProps<'div'>['className'];
  inputSx?: React.HTMLAttributes<HTMLInputElement>['className'];
  inputProps?: React.HTMLProps<HTMLInputElement>,
  errors?: FieldErrors<FieldValues>
}

function Input({label, value, type = 'text', inputSx, inputProps, errors}: InputProps){
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
        {...inputProps}
      />
      {errors && errors[value] && <p className="text-red-500">{`${errors[value].message}`}</p>}
    </div>
  )
}

function SignUp() {

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data)
    reset();
  }

  return (
    <div className="max-w-[600px] p-10 bg-[#1a1a1a] space-y-4">
      <h1 className=" text-[2rem] text-white">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid  justify-stretch text-[1rem] gap-y-3">
        <div className="grid items-start grid-flow-col gap-2 ">
          <Input label='First Name' value='firstName' errors={errors}
            inputProps={{...register("firstName", { 
                required: 'First Name is required'
              }
            )}}
          />
          <Input label='Last Name' value='lastName' errors={errors}
            inputProps={{...register("lastName", { 
                required: 'Last Name is required'
              }
            )}}
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
        <Input label='Email' value='email' type="email" errors={errors}
          inputProps={{...register("email", { 
              required: 'Email is required'
            }
          )}}
        />
        <Input label='username' value='username' errors={errors}
          inputProps={{...register("username", { 
              required: 'username is required'
            }
          )}}
        />
        <Input label='password' value='password' type="password" errors={errors}
          inputProps={{...register("password", { 
              required: 'password is required'
            }
          )}}
        />
        <button disabled={isSubmitting} type="submit" className="text-white disabled:bg-gray-500">Submit</button>
      </form>
    </div>
  )
}

export default SignUp