'use client'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation"
import { app } from "./_libs/firebase/app";
export default function Root(){
    const router = useRouter()
    onAuthStateChanged(getAuth(app),(user)=>{
        if(user){
            router.push('/dashboard')
        }
        else{
            router.push('/auth')
        }
    })
}