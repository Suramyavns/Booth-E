import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function Mark({check}:{
    check:boolean
}){
    return(
        <>
        {
            check?
            <FaCheckCircle className="text-green-500" />
            :
            <FaCircleXmark className="text-red-500"/>
        }
    </>
    )
}