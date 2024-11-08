'use client'

import Mark from "@/app/_components/Mark"
import { app } from "../../../_libs/firebase/app"
import { PasswdSignUp } from "../../../_libs/firebase/auth"
import { getAuth, validatePassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function RegistrationPage() {
    const router = useRouter()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmation,setconfirmation]=useState('')
    const [passwordIsValid,setpasswordisvalid] = useState(false)
    const [warnings,setWarnings]=useState<boolean[]>([])
    const validate = async()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const auth = getAuth(app);
        const status = await validatePassword(auth,password)
        setWarnings([
            status.meetsMinPasswordLength??false,
            status.containsUppercaseLetter??false,
            status.containsLowercaseLetter??false,
            status.containsNumericCharacter??false,
            status.containsNonAlphanumericCharacter??false,
            password.length>0 && password===confirmation,
            emailRegex.test(email),
        ])
        setpasswordisvalid(status.isValid && password === confirmation)
    }
    useEffect(()=>{
        validate()
    },[email,password,confirmation])
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="mona-sans-bold text-2xl text-nowrap">Let&apos;s know each other!</h1>
            <div className="form flex flex-col lg:flex-row justify-between items-center sm:gap-2 lg:gap-10">
                <span>
                    <span className="flex items-center">
                        <input placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" />
                        <Mark check={warnings[6]} />
                    </span>
                    <span className="flex items-center">
                        <input placeholder="********" onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" />
                        <Mark check={warnings[0]&&warnings[1]&&warnings[2]&&warnings[3]&&warnings[4]&&warnings[5]} />
                    </span>
                    <span className="flex items-center">
                        <input placeholder="confirm password" onChange={(e)=>setconfirmation(e.target.value)} type="password" name="password" id="confirmation" />
                        <Mark check={warnings[5]} />
                    </span>
                </span>
                <span className="hidden sm:flex flex-col">
                    <p className="font-bold">Password rules</p>
                    <p className="flex items-center gap-2">Min 8 characters <Mark check={warnings[0]} /></p>
                    <p className="flex items-center gap-2">Uppercase letter <Mark check={warnings[1]} /></p>
                    <p className="flex items-center gap-2">Lowercase letter <Mark check={warnings[2]} /></p>
                    <p className="flex items-center gap-2">Numeric and Special Character <Mark check={warnings[3]&&warnings[4]} /></p>
                </span>
            </div>
            <button onClick={()=>{
                const user = PasswdSignUp(email,password)
                if(user!==null){
                    router.push('/')
                }
            }} disabled={passwordIsValid && email.length>0?false:true} type="submit">
                Yep, that&apos;s me
            </button>
        </div>
    );
}