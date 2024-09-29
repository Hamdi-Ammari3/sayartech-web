// app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const authUser = req.cookies.get('authUser'); // Check for user auth status in cookies

  if (!authUser) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Continue to the dashboard if authenticated
  return NextResponse.next();
}

// Define paths to apply the middleware
export const config = {
  matcher: ['/:path*'], // Apply middleware to all dashboard routes
};
