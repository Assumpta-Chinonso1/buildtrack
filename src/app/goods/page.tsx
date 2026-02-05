export async function generateStaticParams() {
    return [{id: '1'}, {id: "2"}, {id: "3"}, {id: "4"}]
    
}

import Link from "next/link"

export default function GoodsPage() {
    return (
        <>
        <h1>
            Featured Goods 
            <Link href="/goods/1">Goods 1</Link>
               <Link href="/goods/2">Goods 2</Link>
                  <Link href="/goods/3">Goods 3</Link>
                     <Link href="/goods/4">Goods 4</Link>
                        <Link href="/goods/5">Goods 5</Link>
        </h1>
        </>
    )
}