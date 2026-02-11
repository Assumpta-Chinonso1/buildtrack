"use client"

import { useActionState } from "react";
import { FormSate, createProduct } from "@/actions/product";




export default function ProductDbCreatePage() {

    const initialState: FormSate = {
        errors: {},
    }

  const [state, formAction, isPending] =
    useActionState(createProduct, initialState)

    

     return (
        <form action={formAction}  className="  max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Product</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input 
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
                   
                    {
                    state.errors.title && <p className="text-red-500">{state.errors.title}</p>
                }
         
            </div>
            
            <div className="mb-4">
               
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                    type="number"
                   
                    
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
                 {
                    state.errors.price && <p className="text-red-500">{state.errors.price}</p>
                }
            </div>
            
            <div className="mb-4">
                <label className="block text-black mb-2">Description</label>
                <textarea
                  
                   
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
                {
                    state.errors.description && <p className="text-red-500">{state.errors.description}</p>
                }
            </div>
             <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
             disabled={isPending}>
                Submit
             </button>
            {/*<Submit/>*/}
        </form>
    )

}