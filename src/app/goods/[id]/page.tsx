

export default async function GoodsPage(
    {params,

    }: {
        params: Promise<{id: string}>

}
) {
    const {id} = await params

    return(
        <h1>
            Goods {id} details rendered at {new Date().toLocaleTimeString()}
        </h1>
    )
    
}