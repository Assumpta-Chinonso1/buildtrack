export default function Projects() {
    return (
        <div style={{ padding: "20px", background: "#f9f9f9", 
        borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1) ", 
        border: "1px solid #e0e0e0", backgroundColor: "#ffffff" }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Projects Page</h1>
                <p style={{ fontSize: "1.2rem", color: "#555" }}>Here you can manage your projects.</p>
            </div>
            <li style={{ listStyle: "none", padding: "10px 0" }}>
                <strong>Project Overview:</strong> Get a summary of all your projects and their statuses.
            </li>
            <li style={{ listStyle: "none", padding: "10px 0" }}>
                <strong>Create New Project:</strong> Start a new project with customizable settings and options.
            </li>
            <li style={{ listStyle: "none", padding: "10px 0" }}>
                <strong>Project Collaboration:</strong> Invite team members and manage project roles and permissions.
            </li>
        </div>
    );
    
}