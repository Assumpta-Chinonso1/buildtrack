import Link from "next/link";

const settings = [
    { id: "profile", name: "Profile Settings", description: "Manage your profile information" },
    { id: "account", name: "Account Settings", description: "Update your account preferences" },
    { id: "notifications", name: "Notification Settings", description: "Configure your notification preferences" },
    { id: "privacy", name: "Privacy Settings", description: "Adjust your privacy settings" },
]

export default function SettingsPage() {
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Settings</h1>
                <ul className="space-y-4">
                    {settings.map((setting) => (
                        <li key={setting.id}>
                            <div className="p-4 bg-white rounded shadow">
                                <Link href={`/settings/${setting.id}`} className="no-underline hover:underline">
                                    <h2 className="text-xl font-semibold">{setting.name}</h2>
                                    <p className="text-gray-600">{setting.description}</p>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}