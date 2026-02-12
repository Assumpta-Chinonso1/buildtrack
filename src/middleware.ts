import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const middleware = clerkMiddleware((auth, request) => {
  const response = NextResponse.next();

  // Theme cookie logic
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "light"); // fixed typo: them → theme
  }

  // Custom header
  response.headers.set("custom-header", "custom-value");

  return response;
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};



    //if (request.nextUrl.pathname === "/profile") {

        //return NextResponse.redirect(new URL("/hello", request.nextUrl))
        // return NextResponse.rewrite(new URL("/hello", request.nextUrl))
   // }
    //return NextResponse.redirect(new URL("/", request.url))
    
//}

//export const config = {
   // matcher: "/profile",
//}