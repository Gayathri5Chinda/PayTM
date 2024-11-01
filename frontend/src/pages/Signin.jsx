import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { userState, passwordState } from "../atoms/atom"
import { useRecoilState} from 'recoil';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Signin = () => {

    const [username, setUsername] = useRecoilState(userState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
          username,
          password
        });

          // Check if the response data is what you expect
          if (response.data) {
              setResult(response.data.message); // Set the result message
              localStorage.setItem("token", response.data.token); // Store the token
              navigate("/dashboard"); // Navigate to the dashboard
          } else {
              setResult("Unexpected response format.");
          }
      } catch (error) {
          console.error("Signup error:", error); // Log the error
          setResult(error.response ? error.response.data.message : "Signup failed. Please try again.");
      }
  };

    return <div className="bg-slate-300 h-screen flex justify-center">

            <div className="flex flex-col justify-center">

              <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your credentials to access your account"} />

                <InputBox onChange={e => { setUsername(e.target.value); }} placeholder="harkirat@gmail.com" label={"Email"} />
                <InputBox onChange={e => { setPassword(e.target.value); }} placeholder="123456" label={"Password"} />

                <div className="pt-4">
                
                    <Button onClick={handleSignup} label={"Sign in"} />
                </div>

                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                <BottomWarning label={result}  />

              </div>

            </div>

          </div>
}