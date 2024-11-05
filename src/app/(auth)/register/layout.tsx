export default function RegisterLayout({children}:{
    children:React.ReactNode
}){
    return(
        <div className="login-layout lg:w-4/5 h-full flex flex-col gap-8 lg:gap-16 p-10 justify-center items-center">
            <p className="text-center lg:self-start text-4xl lg:text-5xl font-bold text-slate-900">
                Register here!
            </p>
            {children}
        </div>
    )
}