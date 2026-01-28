"use client";

export default function CourseError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/5">
      <h2 className="text-2xl font-bold mb-2">
        Oops! Something went wrong while loading the course.
      </h2>

      <p className="text-lg text-gray-700 mb-4">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
