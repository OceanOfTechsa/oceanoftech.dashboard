import Loader from "@/components/loader";


const Loading = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center backdrop-blur-lg">
            <Loader />
            <p className="text-xs font-bold">Loading view...</p>
        </div>
    )
}
export default Loading;