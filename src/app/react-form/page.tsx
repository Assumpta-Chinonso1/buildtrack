"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function ReactFormPage() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try{
            const res = await fetch("/react-form/api", {
                method: "POST",
                headers: {"Content-Type": "application/json"
                },
                body: JSON.stringify({title, price: parseFloat(price), description})

            })
            if(res.ok) {
                router.push("/service")
                 
            }
        } catch (error) {
            console.error("Error creating product:", error)
        } finally {
            setLoading(false)
        }
    } 


    return (
        <form onSubmit={handleSubmit} className="  max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Product</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-black mb-2">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    required
                />
            </div>
            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-900 disabled:opacity-50"
            >
                {loading ? "Creating..." : "Create Product"}
            </button>
        </form>
    )
}