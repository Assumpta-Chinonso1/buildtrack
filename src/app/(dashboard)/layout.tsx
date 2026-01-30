import Sidebar from "./_components/sidebar";

export default function DashboardLayout({
  main,
  activity,
  analytics,
}: {
  main: React.ReactNode;
  activity: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4">{main}</main>

      <aside className="w-64 border-l">{activity}</aside>
      <aside className="w-64 border-l">{analytics}</aside>
    </div>
  );
}
