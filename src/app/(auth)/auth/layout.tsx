'use client'
import { AuthByGoogle } from "../../_libs/firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function AuthLayout({login,register}:
    {
        login:React.ReactNode,
        register:React.ReactNode
    }) {
        const router = useRouter()
        const [isLogin, setIsLogin] = useState(true);
    return (
        <section className="text-nowrap mona-sans-light h-full w-full flex flex-col gap-6 justify-center items-center" id="auth">
            <h1 className="mona-sans-bold text-3xl md:text-6xl">Welcome to Booth-e!</h1>
            <span className="shadow-2xl backdrop-blur-lg shadow-black w-4/5 h-fit lg:w-2/3 form-container flex gap-2 items-center flex-col md:flex-row">
                <span className="w-2/3 h-full flex justify-center items-center">
                    {isLogin?login:register}
                </span>
                <span className="grid grid-flow-row gap-2 items-center justify-center">
                    <button onClick={()=>{setIsLogin(!isLogin)}}>
                        {isLogin?'Create an Account':'I have an Account'}
                    </button>
                    <button className="flex gap-2 items-center justify-center" onClick={async()=>{
                        const user = await AuthByGoogle()
                        if(user){
                            router.push('/')
                        }
                    }}>
                        Continue with Google<FaGoogle size={16}/>
                    </button>
                </span>
            </span>
        </section>
    );
}