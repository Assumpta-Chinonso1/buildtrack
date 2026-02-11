
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const seedProducts = async () => {
    const count = await prisma.product.count()
    if(count === 0) {
        await prisma.product.createMany({
            data: [
                {title: "Product 1", price: 500, description: "Description 1"},
                {title: "Product 2", price: 600, description: "Description 2"},
                {title: "Product 3", price: 700, description: "Description 3"},
            ]
        })
    }
}
//Run seed if needed

seedProducts()


export async function getProducts() {
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate delay
    return prisma.product.findMany()
}

export async function getProductById(id: number) {
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate delay
    return prisma.product.findUnique({
        where: { id }
    })
}

export async function createProduct(data: { title: string, price: number, description: string }) {
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate delay
    return prisma.product.create({
        data: {
            title: data.title,
            price: data.price,
            description: data.description
        }
    })
}


export async function updateProduct(id: number, data: { title?: string, price?: number, description?: string }) {
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate delay
    return prisma.product.update({
        where: { id },
        data: {
            title: data.title,
            price: data.price,
            description: data.description
        }
    })
}

export async function deleteProduct(id: number) {
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate delay
    return prisma.product.delete({
        where: { id }
    })
}