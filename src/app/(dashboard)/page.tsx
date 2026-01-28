export default function DashboardPage() {
  return (
    <div className="min-h-[80vh] rounded-lg border bg-white p-4 shadow-sm md:p-6">
      
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-3 text-2xl font-bold md:text-3xl">
          Dashboard Overview
        </h1>

        <p className="mb-6 text-base text-gray-600 md:text-lg">
          Welcome to your dashboard! Here you can find a summary of your
          activities and quick links to various sections.
        </p>
      </div>

      <ul className="space-y-4">
        <li className="rounded-md bg-gray-50 p-4">
          <strong>Recent Activities:</strong> View your latest actions and updates in one place.
        </li>

        <li className="rounded-md bg-gray-50 p-4">
          <strong>Quick Links:</strong> Access important sections of the application with ease.
        </li>

        <li className="rounded-md bg-gray-50 p-4">
          <strong>Statistics Overview:</strong> Get insights into your performance and usage metrics.
        </li>
      </ul>

    </div>
  );
}
