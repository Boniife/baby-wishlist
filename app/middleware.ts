import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const shouldShowNavbar = !request.nextUrl.pathname.startsWith('/cart');
  const response = NextResponse.next();

  response.headers.set('x-show-navbar', shouldShowNavbar ? 'true' : 'false');
  return response;
}

export const config = {
  matcher: '/:path*',
};
