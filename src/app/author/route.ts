import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/authors', process.env.NEXT_PUBLIC_SITE_URL));
}