import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { path: '/login', whenAuthenticated: 'redirect' },
  { path: '/register', whenAuthenticated: 'redirect' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED = '/login'

export default function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find(route => route.path === path);

  // NextAuth v4 cookie names
  const sessionToken =
    request.cookies.get('next-auth.session-token') ||
    request.cookies.get('__Secure-next-auth.session-token');

  const isAuthenticated = !!sessionToken;

  if (!isAuthenticated && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  if (isAuthenticated && publicRoute?.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/feed'; // MusicSeat private home
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - mockServiceWorker.js (MSW service worker)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|mockServiceWorker.js).*)',
  ],
}