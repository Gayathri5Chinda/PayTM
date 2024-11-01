import { useEffect } from "react"
import { Appbar } from "../components/Appbar"
import { Users } from "../components/Users"
import { useState } from "react"
import axios from "axios"
import { amountState } from "../atoms/atom"
import { useRecoilState } from "recoil"
import { Provider } from "react"
export const Dashboard = () => {

    const [amount, setAmount] = useRecoilState(amountState);



        useEffect(() => {
            axios.get("http://localhost:3000/api/v1/account/balance",
            {
                headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
             }})
                .then(response => {
                    setAmount(response.data.balance)
                })
        }, [amount])    
        

    return  <div>
               <Appbar />
                <div className="m-8">
                    <div className="flex">

                        <div className="font-bold text-lg"> Your balance :</div>
                        <div className="font-semibold ml-4 text-lg">Rs {amount}</div>
                    </div>

                    <Users />
                </div>

            </div>
}