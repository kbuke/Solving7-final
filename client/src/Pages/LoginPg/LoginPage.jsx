import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router"
import { usePost } from "../../Hooks/usePost"
import { TextContainers } from "../../Components/TextContainers"

export function LoginPage(){
    const [loginError, setLoginError] = useState(false)
    const [loggedIn, setLoggedin] = useState(false)

    const navigate = useNavigate()

    const appData = useOutletContext()

    const loggedUser = appData?.loggedUser
    const setLoggedUser = appData?.setLoggedUser
    const register = appData?.register
    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading
    const errors = appData?.errors
    const handleSubmit = appData?.handleSubmit

    // Handle Login
    const handleLogin = (formData) => {
        console.log("LOGIN FORM DATA:", formData)
        usePost({
            url: "/api/login",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (user) => {
                setLoggedUser(user)
                navigate("/admin")
            },
            onError: msg => {
                setError(msg || "Login Failed")
            }
        })
    }

    const loginArray = [
        {
            label: "Please enter email address",
            type: "text",
            name: "userEmail",
            validation: {
                required: "Please enter your email"
            }
        },

        {
            label: "Please enter your password",
            type: "password",
            name: "userPassword",
            validation: {
                required: "Please enter your password"
            }
        }
    ]

    return(
        <TextContainers 
            purpose="Login"
            textArray={loginArray}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={handleLogin}
            isLoading={isLoading}
            error={loginError}
            errorText="Failed to Login"
            completed={loggedIn}
            completedText="Logged In"
        />
    )
}