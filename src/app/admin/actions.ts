"use server"

import { auth, clerkClient } from "@clerk/nextjs/server"
import { Roles } from "@/components/types/global"

export async function promoteToAdmin(formData: FormData) {
    const {sessionClaims} = await auth()

    if(sessionClaims?.metadata?.role !== "admin"){
        throw new Error("Unauthorized")
    }

    const client = await clerkClient()

    const userId = formData.get("userId") as string

    const role = formData.get("role") as Roles

    try {
        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                role,
            }
        })
    } catch (error) {
        console.error("Error updating user role:", error)
         throw new Error("Failed to update user role")
            }
    }

    export async function demoteToUser(formData: FormData) {
const {sessionClaims} = await auth()

if(sessionClaims?.metadata?.role !== "admin"){
    throw new Error("Unauthorized")
}

const client = await clerkClient()
const userId = formData.get("userId") as string


try {
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: null,
      },
    })
  } catch (error) {
    console.error("Error updating user role:", error)
    throw new Error("Failed to update user role")
  }
}

