import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

  //const isUserProtectedProfile = createRouteMatcher("/user-profile");
 const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "sign-up(.*)"]);

 const isAdminRoute = createRouteMatcher("/admin(.*)");

export const middleware = clerkMiddleware( async (auth, request) => {

    const {userId, redirectToSignIn} = await auth()

    if(!userId && !isPublicRoute(request)) {
      return redirectToSignIn();
    }

    if(isAdminRoute(request) && ((await auth()).sessionClaims?.metadata?.role !== "admin")){
      const url = new URL("/", request.url)
      return NextResponse.redirect(url)
    }
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