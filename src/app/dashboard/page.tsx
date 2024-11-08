'use client'
import { useRouter } from "next/navigation";
import { SignOut } from "../_libs/firebase/auth";

export default function DashBoardPage() {
    const router = useRouter()
    return (
        <div>
            <h1>hello ji</h1>
            <button onClick={()=>{
                const success = SignOut()
                if(success===true){
                    router.push('/')
                }
            }}>Logout</button>
        </div>
    );
}