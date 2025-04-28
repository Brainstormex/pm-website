import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const slug = url.pathname.split('/').pop();
  
  // Redirect to the topics page with the same slug
  return NextResponse.redirect(new URL(`/tag/${slug}`, url.origin));
}
