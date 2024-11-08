import { ClipLoader } from "react-spinners";

export default function DefaultLoader() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={150} color="gray" />
        </div>
    );
}