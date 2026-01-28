 import Link from "next/link"

const projects = [
    {id: "Alpha", name: "Project Alpha", description: "Description for Project Alpha"},
    {id: "Beta", name: "Project Beta", description: "Description for Project Beta"},
    {id: "Gamma", name: "Project Gamma", description: "Description for Project Gamma"},
    {id: "Zeta", name: "Project Zeta", description: "Description for Project Zeta"},    
  { id: "iphone", name: "iPhone App", description: "iOS mobile project" },
  { id: "macbook", name: "MacBook App", description: "MacOS project" },
  { id: "ipad", name: "iPad App", description: "Tablet project" },
]

export default function ProjectsPage() {
    return(
        <div className="min-h-screen p-8 bg-gray-100">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Projects</h1>
                </div>
                <ul className="max-w-5xl mx-auto space-y-4">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <div className="p-4 bg-white rounded shadow">
                                 <Link href={`/projects/${project.id}`} 
                                
                                 className="no-underline hover:underline">
                                <h2 className="text-xl font-semibold">{project.name}</h2>
                                <p className="text-gray-600">{project.description}</p>
                                </Link>

                            </div>
                        </li>
                ))}

                </ul>

        </div>
    )
}