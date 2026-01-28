"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/5">
      <h2 className="text-2xl font-bold mb-2">Application Error!</h2>
      <p className="text-lg text-gray-700 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Reload
      </button>
    </div>
  );
}