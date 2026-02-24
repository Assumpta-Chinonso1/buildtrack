import { clerkClient } from "@clerk/nextjs/server";
import { promoteToAdmin, demoteToUser } from "./actions";

export default  async function AdminPage() {
         const client  = await clerkClient()

         const users = (await client.users.getUserList()).data

         return(
            <>
              {users.map((user) => {
                <div  key={user.id} className={`flex items-center justify-between gap-4 p-4${
                    users.indexOf(user) % 2 === 0
                    ? "bg-neutral-50 dark:bg-neutral-800"
                    : "bg-white dark:bg-neutral-900"
                }`}>

                    <div className="flex gap-4">
                        <div className="dark:text-neutral-200">
                            {user.firstName} {user.lastName}
                        </div>
                        <div className="dark:text-neutral-200">
                            {user.emailAddresses.find(
                                (email) => email.id === user.primaryEmailAddressId

                            )?.emailAddress }
                        </div>
                        <div className="dark:text-neutral-200">
                            {user.publicMetadata.role as string}
                        </div>
                    </div>

                        <div className="flex gap-2 ">
                            <form action={promoteToAdmin} className="inline">
                                <input type="hidden" value={user.id} name="id" />
                                 <input type="hidden" value="admin" name="role" />
                      <button type="submit" className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-50">
                        Make Admin
                      </button>
                             </form>

                            <form action={promoteToAdmin} className="inline">
                                   <input type="hidden" value={user.id} name="id" />
                                 <input type="hidden" value="contributor" name="role" />
                      <button type="submit" className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-50">
                        Make contributor
                      </button>
                            </form>
                            
                            <form action={demoteToUser} className="inline">
                                   <input type="hidden" value={user.id} name="id" />
                                
                      <button type="submit" className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-50">
                        Remove Role
                      </button>
                            </form>
                        </div>
                </div>
              })}
            </>
         )
}