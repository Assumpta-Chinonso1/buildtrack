import { notFound } from "next/navigation";


type SettingsPageProps = {
    params: Promise<{
        settingsId: string;
    }>;
};

const validSettingsIds = ["profile", "account", "preferences", "privacy", "notifications"];


export default async function SettingsPage({params} : SettingsPageProps) {
    const { settingsId } = await params;
    await new Promise((resolve) => setTimeout(resolve, 1500))
    if (!validSettingsIds.includes(settingsId)) {
        notFound();
    }

    return(
        <div className="min-h-screen p-8 bg-black/5">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Settings</h1>
                <p className="text-gray-700">
                    This is the settings page for: {settingsId}. Here you can manage your {settingsId} settings and preferences.
                </p>

                
            </div>
        </div>
    )
}