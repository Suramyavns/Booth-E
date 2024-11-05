/* eslint-disable @next/next/no-img-element */
import LoginForm from "./form";

export default function Login(){
    return(
        <div className="w-full flex justify-center p-4 items-center">
            <span className="flex w-full h-full justify-center items-center">
                <img className="hidden lg:block" width={320} src="/favicon.png" alt="image comes here" />
            </span>
            <span className="flex justify-center items-center gap-8 h-full">
                <div className="hidden lg:block h-full border-r">.</div>
                <LoginForm />
            </span>
        </div>
    )
}