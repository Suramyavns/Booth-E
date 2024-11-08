'use client'
import { useEffect, useState } from "react";
import { PasswdSignIn } from "../../../_libs/firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [emailisvalid,setemailisvalid]=useState(false)
    useEffect(()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setemailisvalid(emailRegex.test(email))
    },[email])
    return (
        <div className="flex flex-col justify-center items-center h-4/5 w-fit">
            <h1 className="mona-sans-bold self-start my-2 text-2xl font-bold text-nowrap">Do we know you?</h1>
            <span className="flex flex-col gap-4">
                <input placeholder="example@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} type="email" name="Your email" id="email" />
                <input placeholder="********" required onChange={(e)=>{setPassword(e.target.value)}} type="password" name="Your password" id="password" />
                <button onClick={async()=>{
                    const user = await PasswdSignIn(email,password)
                    if(user){
                        router.push('/')
                    }
                }} disabled={emailisvalid && password.length>0?false:true} type="submit">
                    This is me
                </button>
            </span>
        </div>
    );
}