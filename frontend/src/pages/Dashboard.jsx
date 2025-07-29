import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export function Dashboard(){
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if(!token){
            navigate("/signin");
        }
    },[])

    if(!token){
        return null;
    }

    const [balance,setBalance]=useState();

    useEffect( ()=> {
        axios.get("http://localhost:3000/api/v1/accounts/balance",{
            headers:{
                Authorization: token
            }
        })
            .then(response => {
                setBalance(response.data.balance);
            })
    },[])
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}