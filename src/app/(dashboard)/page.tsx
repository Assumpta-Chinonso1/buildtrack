export default function DashboardPage() {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "8px",
     boxShadow: "0 2px 4px rgba(0,0,0,0.1)", minHeight: "80vh", 
      border: "1px solid #e0e0e0", backgroundColor: "#ffffff"  }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Dashboard Overview</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Welcome to your dashboard! Here you can find a summary of your activities and quick links to various sections.</p>
      </div>
      <li style={{ listStyle: "none", padding: "10px 0" }}>
        <strong>Recent Activities:</strong> View your latest actions and updates in one place.
      </li>
      <li style={{ listStyle: "none", padding: "10px 0" }}>
        <strong>Quick Links:</strong> Access important sections of the application with ease.
      </li>
      <li style={{ listStyle: "none", padding: "10px 0" }}>
        <strong>Statistics Overview:</strong> Get insights into your performance and usage metrics.
      </li>
    </div>
  );
}
