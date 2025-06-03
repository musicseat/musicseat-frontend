import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"

const publicRoutes = [
  {path: '/sign-up', whenAuthenticated: 'redirect'},
  {path: '/sign-in', whenAuthenticated: 'redirect'},
  {path: '/pricing', whenAuthenticated: 'next'},
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED = '/sign-up'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname 
  const publicRoute = publicRoutes.find(route => route.path === path)
  const isAuthenticated = request.cookies.get('sessionCookie') !== undefined 

  if (!isAuthenticated && publicRoute) {
    return NextResponse.next()
  }

  if (!isAuthenticated && !publicRoute) {
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED

    return NextResponse.redirect(redirectUrl)
  }

  if (isAuthenticated && publicRoute?.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = '/'

    return NextResponse.redirect(redirectUrl)
  }

  if (isAuthenticated && !publicRoute) {
    //checar se o jwt está expirado
    //se sim, remover o cookie e redirecionar para a página de login

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config: MiddlewareConfig = {
  matcher:  [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
