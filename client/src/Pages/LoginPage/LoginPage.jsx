import { useOutletContext, useNavigate } from "react-router"
import { TextInput } from "../../Components/TextInput"
import { LoadingIcon } from "../../Components/LoadingIcon"
import { usePost } from "../../Hooks/usePost"
import { useForm } from "react-hook-form"
import { useState } from "react"

export function LoginPage() {
  const [logInError, setLogInError] = useState(false)

  const appData = useOutletContext()

  const isLoading = appData?.isLoading
  const setIsLoading = appData?.setIsLoading
  const loggedUser = appData?.loggedUser
  const setLoggedUser = appData?.setLoggedUser

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin = (formData) => {
    usePost({
      url: "/api/login",
      body: formData,
      credentials: "include",
      setLoading: setIsLoading,
      onSuccess: (user) => {
        setLoggedUser(user)
        navigate("/admin")
      },
      onError: setLogInError,
    })
  }

  const loginInputs = [
    {
      type: "text",
      placeholder: "Please enter email address",
      className: "login-container",
      name: "userEmail",
      validation: {
        required: "Please enter your email address.",
        pattern: {
          value: /^[^\s@]+@solving7green\.com$/,
          message: "Email must end with @solving7green.com",
        },
      },
    },

    {
      type: "password",
      placeholder: "Please enter your password",
      className: "login-container",
      name: "userPassword",
      validation: {
        required: "Please enter password",
      },
    },
  ]

  return (
    <div
      className="
                w-full min-h-screen flex
                bg-linear-to-br from-green-300 to-green-600
                justify-center items-center
            "
    >
        {loggedUser
            ? <div
                className="
                    w-9/10 rounded-xl text-center p-4
                    bg-white/80 font-bold

                    lg:w-1/4
                "
            >
                You are already logged in. Please go to the 
                    <a href="/admin" className="text-red-400"> Admin-Page </a> 
                to log-out.
            </div>
            :
            <form
                className="
                    w-9/10 flex flex-col justify-center items-center
                    bg-black/60 p-10 rounded-2xl text-center
                    md:w-2/5
                    lg:w-1/3
                "
                onSubmit={handleSubmit(handleLogin)}
            >
                {isLoading ? (
                <LoadingIcon />
                ) : (
                <>
                    <h1 className="form-headers text-white">Solving7 Login</h1>

                    {logInError ? (
                    <div className="form-error-div">Login Failed</div>
                    ) : null}

                    <TextInput
                    inputArray={loginInputs}
                    errors={errors}
                    register={register}
                    />

                    <button className="submit-button hover:-translate-y-1.5">
                    Login
                    </button>
                </>
                )}
            </form>
        }
    </div>
  )
}
