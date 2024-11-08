/* eslint-disable @next/next/no-img-element */
export default function NotFound() {
    return (
        <div className="w-full h-full flex gap-4 flex-col justify-center items-center">
            <h1 className="mono-sans-bold text-3xl font-bold md:text-6xl">What brought you here?</h1>
            <img className="w-2/3 lg:w-1/3" src="https://http.dog/404.jpg" alt="404-Doggo" />
        </div>
    );
}