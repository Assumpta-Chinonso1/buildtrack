import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    if (!themePreference) {
        response.cookies.set("them", "light")
        
    }

    response.headers.set("custom-header", "custome-value")

    return response


    //if (request.nextUrl.pathname === "/profile") {

        //return NextResponse.redirect(new URL("/hello", request.nextUrl))
        // return NextResponse.rewrite(new URL("/hello", request.nextUrl))
   // }
    //return NextResponse.redirect(new URL("/", request.url))
    
}

//export const config = {
   // matcher: "/profile",
//}