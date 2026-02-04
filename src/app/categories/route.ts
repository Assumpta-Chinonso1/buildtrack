export const dynamic = "force-static"

export async function GER() {

    const categories = [
        {id: 1, name: "Food"},
         {id: 2, name: "Electronics"},
          {id: 3, name: "Shopping"},
           {id: 4, name: "Abundant"},
            {id: 5, name: "Money"},
    ]

    return Response.json(categories)
}