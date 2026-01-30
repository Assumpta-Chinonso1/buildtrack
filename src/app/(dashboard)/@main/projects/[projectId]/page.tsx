import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
        projectId: string;
    }>;
};
const validProjectIds = ["Alpha", "Beta", "Gamma", "Zeta", "iphone", "macbook", "ipad"];

export default async function ProjectPage({ params }: PageProps) {
      const { projectId } = await params;
           
      await  new Promise((resolve) => setTimeout(resolve, 1500));

      if(projectId === "crash"){
        throw new Error("Simulated crash for testing purposes");
      }
      if(!validProjectIds.includes(projectId)){
        notFound()
      }

    return(
        <div className="min-h-screen p-8 bg-black/5">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Project Details - ID: {projectId} </h1>
                <p className="text-gray-700">
                    This is the detailed view for project with ID: {projectId}. Here you can add more information about the project, its status, tasks, team members, and other relevant details.
                </p>
            </div>
        </div>
    )
}