// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
//
// export default function middleware(request: NextRequest) {
//     const requestHeaders = new Headers(request.headers);
//
//     requestHeaders.set('x-next-pathname', request.nextUrl.pathname);
//     requestHeaders.set('x-net-searchParam', request.nextUrl.search);
//
//     return NextResponse.next({
//         request: {
//             headers: requestHeaders,
//         },
//     });
// }
//
// export const config = {
//     matcher: [
//         '/((?!api|_next/static|_next/image|favicon.ico).*)',
//     ],
// };

import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}