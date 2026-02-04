import { redirect } from "next/navigation"


type  UserV1 = {
    id: string;
    email: string;
    fullName: string;
    createdAlt: string
}

export async function GET() {
   redirect("api/v2/users")
    const users: UserV1[] = [
        {
            id: "55e8400-e29b-41d4-a716-446655440000",
            email: "user@example.com",
            fullName: "John Doe",
            createdAlt: "2023-01-01T00:00:00Z"
        },

        {
            id: "66e8400-e29b-41d4-a716-446655440000",
            email: "admin@example.com",
            fullName: "Admin User",
            createdAlt: "2023-01-02T00:00:00Z"
        },
        {
            id: "77e8400-e29b-41d4-a716-446655440000",
            email: "guest@example.com",
            fullName: "Guest User",
            createdAlt: "2023-01-03T00:00:00Z"
        },
        {
            id: "88e8400-e29b-41d4-a716-446655440000",
            email: "test@example.com",
            fullName: "Test User",
            createdAlt: "2023-01-04T00:00:00Z"
        },

    ]

    return Response.json(users)
    
}