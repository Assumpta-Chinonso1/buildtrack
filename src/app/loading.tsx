export default function GlobalLoading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black/5">
            <h2 className="text-2xl font-bold mb-2">
                Loading...
            </h2>
            <p className="text-lg text-gray-700">
                Please wait while we fetch the data.
            </p>
         
        </div>
    );
}