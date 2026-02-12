export{}

export type Roles = "admin" | "user" | "editor" | "viewer" | "contributor" | "manager" | "developer" | "tester" | "analyst" | "designer"

declare global {
    interface CustomUser {
        metadata: {
            role?: Roles
        }
    }
}