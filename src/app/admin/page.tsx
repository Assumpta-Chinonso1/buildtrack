import { clerkClient } from "@clerk/nextjs/server"
import { promoteToAdmin, demoteToUser } from "./actions"

export default async function AdminPage() {
  const users = await clerkClient.users.getUserList()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <div className="space-y-4">
        {users.data.map((user) => {
          const role = user.publicMetadata?.role

          return (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <p className="font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-500">
                  {user.emailAddresses[0]?.emailAddress}
                </p>
                <p className="text-sm mt-1">
                  Role: {role ? String(role) : "user"}
                </p>
              </div>

              <div className="flex gap-2">
                {/* Promote Form */}
                <form action={promoteToAdmin}>
                  <input type="hidden" name="userId" value={user.id} />
                  <input type="hidden" name="role" value="admin" />
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Promote
                  </button>
                </form>

                {/* Demote Form */}
                <form action={demoteToUser}>
                  <input type="hidden" name="userId" value={user.id} />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Demote
                  </button>
                </form>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
