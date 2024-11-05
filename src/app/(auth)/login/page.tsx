/* eslint-disable @next/next/no-img-element */
import LoginForm from "./form";

export default function Login(){
    return(
        <div className="w-full flex justify-center p-4 items-center gap-4">
            <span className="flex w-full h-full justify-center items-center">
                <img
                style={{
                    backgroundColor:'#333533'
                }}
                className="hidden lg:block w-full" src="/exhibition.png" alt="image comes here" />
            </span>
            <span className="flex justify-center items-center gap-8 h-full mx-2">
                <div className="hidden lg:block h-full border-r">.</div>
                <LoginForm />
            </span>
        </div>
    )
}