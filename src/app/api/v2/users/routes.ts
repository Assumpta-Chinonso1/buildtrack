type UserV2 = {
    id: string;
    email: string;
    fullName: string;
    createdAt: string;



    name: {
        first: string;
        last: string;
        middle?: string;
    }
    status: "active" | "inactive" | "suspended";
    lastLoginAt: string | null;

    profile: {
        avatar: string | null;
        title: string | null;
        department: string | null;
        location: string | null;
        phoneNumber: string | null;
        bio: string | null;

    }

    preferences: {
        language: string;
        timezone: string;
        notifications: {
            email: boolean;
            sms: boolean;
            push: boolean;
        }
    }

}

