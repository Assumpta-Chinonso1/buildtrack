import { notFound } from "next/navigation";

type CoursesPageProps = {
    params: Promise<{
        coursesId: string;
    }>;
};

const validCourseIds = ["react", "nextjs", "typescript", "nodejs", "tailwind"];

export default async function CoursePage({ params }: CoursesPageProps) {
    const { coursesId } = await params;
    if(coursesId === "crash"){
        throw new Error("Simulated crash for testing purposes");
    }
    if (!validCourseIds.includes(coursesId)) {
        notFound();
    }

    return (
        <div className="min-h-screen p-8 bg-black/5">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Course Details - ID: {coursesId} </h1>
                <p className="text-gray-700">
                    This is the detailed view for course with ID: {coursesId}. Here you can add more information about the course, its syllabus, instructors, and other relevant details.
                </p>
            </div>
        </div>
    );
}