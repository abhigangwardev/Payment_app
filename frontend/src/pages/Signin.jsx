import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin(){
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox onChange={(e) => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"abc@gmail.com"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value);
                }} label={"Password"} placeholder={"123456"} />
                <div className="pt-4">
                    <Button label={"Sign In"} onPress={async () => {
                        const response =axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        })
                        if(response){
                            localStorage.setItem("token","Bearer "+(await response).data.token);
                            navigate("/dashboard");
                        }
                    }} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>


        </div>

    </div>
}