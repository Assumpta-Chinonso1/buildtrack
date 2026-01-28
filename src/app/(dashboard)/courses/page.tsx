import Link from "next/link"


const courses = [
    { id: "react", name: "React for Beginners", description: "Learn the basics of React.js" },
    { id: "nextjs", name: "Next.js Fundamentals", description: "Get started with Next.js framework" },
    { id: "typescript", name: "TypeScript Essentials", description: "Understand TypeScript and its features" },
    { id: "nodejs", name: "Node.js Basics", description: "Introduction to server-side JavaScript with Node.js" },
    {id: "tailwind", name: "Tailwind CSS", description: "Learn how to style your applications with Tailwind CSS" },
]

export default function CoursesPage() {

    return(
        <div className="min-h-screen p-8 bg-black/5">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Courses</h1>
                <ul className="space-y-4">
                    {courses.map((course) => (
                        <li key={course.id}>
                        <div className="p-4 bg-white rounded shadow">
                            <Link href={`/courses/${course.id}`} className="no-underline hover:underline">
                                <h2 className="text-xl font-semibold">{course.name}</h2>
                                <p className="text-gray-600">{course.description}</p>
                            </Link>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}