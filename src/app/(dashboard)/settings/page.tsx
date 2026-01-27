export default function SettingsPage() {
    return (
        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Settings Page</h1>
                <p style={{ fontSize: "1.2rem", color: "#555" }}>Manage your application settings here.</p>
                <li style={{ listStyle: "none", padding: "10px 0" }}>
                    <strong>Notification Preferences:</strong> Customize how you receive notifications.

                </li>
                <li style={{ listStyle: "none", padding: "10px 0" }}>
                    <strong>Privacy Settings:</strong> Control your data sharing and visibility options.
                </li>
                <li style={{ listStyle: "none", padding: "10px 0" }}>
                    <strong>Account Management:</strong> Update your account information and password.
                </li>

            </div>
           
        </div>
    );
}