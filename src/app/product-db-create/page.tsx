import { getProductById } from "@/prisma-db"
import { redirect } from "next/navigation"

export default function ProductDbCreatePage() {
    async function createProduct(formData: FormData) {

   "use server"

    const title = formData.get("title") as string
    const price = formData.get("price") as string
    const description = formData.get("description") as string
 
  await getProductById(title, parseInt(price), description)

  redirect("/service")
    
}

     return (
        <form action={createProduct}  className="  max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Product</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input 
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
                   
                   
         
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                    type="number"
                   
                    
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-black mb-2">Description</label>
                <textarea
                  
                   
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
            </div>
            <button 
                type="submit" 
              
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-900 disabled:opacity-50"
            >
               Add Product
            </button>
        </form>
    )

}