import { auth, currentUser } from "@clerk/nextjs/server"

export default async function CashboardPage() {
   const authObject = await auth()
  const userObject = await  currentUser()

  console.log(authObject, userObject);
  
return (
<div className="p-6">
     <h1 className="text-2xl font-bold mb-4">Dashboard</h1> 
     <p>Welcome to your dashboard! Here you can manage your projects, track your learning, and stay organized.</p> 
     </div> ) }