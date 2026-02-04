import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {

  const requestHeaders = new Headers(request.headers)

  console.log(requestHeaders.get("Authoriasation"))

    return new Response("Api profile Page")
    
}