import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  console.log(req.nextUrl.pathname, "req.nextUrl.pathname");
  console.log(req.nextUrl.host, "req.nextUrl.host");
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL, "process.env.NEXT_PUBLIC_API_BASE_URL");

  if (!req.nextUrl.pathname.includes("/_next") && !req.nextUrl.pathname.includes("/assets")) {

    //Quick Note
    //for static page html if heaer footer is not required then render the html here 
    //else send it to pages
    // if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    //   try {
    //     const apiResponse = await fetch(
    //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-page-info?slug=${req.nextUrl.pathname}`,
    //       {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           slug: req.nextUrl.pathname,
    //         })
    //       }
    //     );
    //     const data = await apiResponse.json();
    //     console.log(data.status, "apiResponse.data");

    //     if (data.status === "success") {
    //       return new Response(data.content, {
    //         headers: { "Content-Type": data.contentType },
    //       });
    //     }
    //   } catch (error) {
    //     console.error("Middleware API call failed:", error);
    //     return response;
    //   }
    // } else {
    //   console.log("SET NEXT_PUBLIC_API_BASE_URL ");
    // }
  }
  response.headers.set("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  return response;
}

export const config = {
  matcher: "/:path*",
};
