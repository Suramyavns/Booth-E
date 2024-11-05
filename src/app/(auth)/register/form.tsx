import { GrGoogle } from "react-icons/gr";
import { secondary } from "../../colors";
import Link from "next/link";

export default function RegistrationForm(){
    return(
        <div
        style={{
            backgroundColor:secondary
        }}
        className="flex flex-col justify-center items-center gap-10 p-6 rounded-xl h-fit w-80">
            <p className="self-start text-2xl font-semibold">Nice to meet you!</p>
            <div className="flex flex-col gap-6 justify-center items-center w-full">
                <span className="flex flex-col gap-2 justify-center items-center">
                    <label className="self-start" htmlFor="email">Your Email </label>
                    <input placeholder="example@gmail.com" type="email" name="email" id="email" />
                </span>
                <span className="flex flex-col gap-2 justify-center items-center">
                    <label className="self-start" htmlFor="password">Password</label>
                    <input placeholder="********" type="password" name="password" id="password" />
                </span>
                <span className="flex flex-col gap-2 justify-center items-center">
                    <label className="self-start" htmlFor="password">Confirm Password</label>
                    <input placeholder="********" type="password" name="password" id="password" />
                </span>
                <span className="flex flex-col gap-2">
                    <button className="btn">
                        Register now
                    </button>
                    <button className="btn">
                        Sign-Up with Google <GrGoogle />
                    </button>
                </span>
                <p className="flex gap-1">
                    <Link className="opacity-70 hover:opacity-100 ease-in-out duration-300" href='/login'>You know me already</Link>
                </p>
            </div>
        </div>
    )
}